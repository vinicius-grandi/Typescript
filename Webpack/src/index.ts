import path from 'path';
import fs from 'fs';
import meriyah, { parseModule } from 'meriyah';
import { generate } from 'astring';
import { fileURLToPath } from 'url';
import type {
  ExportNamedDeclaration,
  ImportDeclaration,
  ImportSpecifier,
} from 'meriyah/dist/src/estree';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const depsArray: {
  name: string;
  source: meriyah.ESTree.Program;
}[] = [];

const depsGraph = (file: string) => {
  const fullPath = path.resolve(__dirname, '..', file);

  if (!!depsArray.find((item) => item.name === fullPath)) return;
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const source = parseModule(fileContents);
  const module = {
    name: fullPath,
    source,
  };

  // console.log(source)

  source.body.map((current) => {
    if (
      current.type === 'ImportDeclaration' &&
      typeof current.source.value === 'string'
    ) {
      depsGraph(`${current.source.value}.js`);
    }
  });

  depsArray.push(module);

  return depsArray;
};

/** Module template - Converte um dado módulo em um usável pelo compilador */
const buildModuleTemplateString = (moduleCode: string, index: number) => `
/* index/id ${index} */
(function(module, _ourRequire) {
  "use strict";
  ${moduleCode}
})
`;

/** Runtime Template - Carrega os módulos e dá um id para o módulo inicial */
const buildRuntimeTemplateString = (allModules: any, indexLocation: number) => `
(function(modules) {
  // Define runtime
  const installedModules = {}; // id/index + exports
  function _our_require_(moduleId) {
    // Module in cache?
    if (installedModules[moduleId]) {
      // return function exported in module
      return installedModules[moduleId].exports;
    }

    // Build module, store exports against this ref.
    const module = {
      i: moduleId,
      exports: {},
    };

    // Execute module template function. Add exports to ref.
    modules[moduleId].call({}, module, _our_require_);

    // cache exports of module
    const exports = module.exports;
    installedModules[moduleId] = exports;

    // Return exports of module
    return exports;
  }
  // Load entry module via id + return exports
  return _our_require_(${indexLocation})
})
/* Dep tree */
([
  ${allModules}
])
`;

/*
  Replacing ESM import with our function.
  const someImport = _ourRequire("{ID}");
  console.log("Import AST", ast.parse(program). body [0])'
*/
const getImport = (item: ImportDeclaration, allDeps: typeof depsArray) => {
  const importFunctionName = (item.specifiers[0] as ImportSpecifier).imported.name;
  const fileImported = item.source.value as string;
  const fullFile = path.resolve(fileImported);
  const itemId = allDeps.findIndex((item) => item.name === fullFile);

  return {
    type: 'VariableDeclaration',
    kind: 'const',
    declarations: [
      {
        type: 'VariableDeclarator',
        init: {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: '_ourRequire',
          },
          arguments: [
            {
              type: 'Literal',
              value: itemId,
            },
          ],
        },
        id: {
          type: 'Identifier',
          name: importFunctionName,
        },
      },
    ],
  };
};

/**
 * Replacing ESM export with our function.
 * Use below code snippet to confirm structure:
 * 'module.exports' = someFunction;'
 */
const getExport = (item: ExportNamedDeclaration) => {
  // get export function name
  const id = item.declaration.declarations[0].id.name;
  return {
    type: 'ExpressionStatement',
    expression: {
      type: 'AssignmentExpression',
      left: {
        type: 'MemberExpression',
        object: { type: 'Identifier', name: 'module' },
        computed: false,
        property: { type: 'Identifier', name: 'exports' },
      },
      operator: '=',
      right: { type: 'Identifier', name: id },
    },
  };
  if (item.specifiers.length < 1) return item;

  const moduleName = item.specifiers[0].exported.name;

  return {
    type: 'ExpressionStatement',
    expression: {
      type: 'AssignmentExpression',
      left: {
        type: 'MemberExpression',
        object: { type: 'Identifier', name: 'module' },
        computed: false,
        property: { type: 'Identifier', name: 'exports' },
      },
      operator: '=',
      right: { type: 'Identifier', name: moduleName },
    },
  };
};

const transform = (depsArr: typeof depsArray | undefined) => {
  if (!depsArr) return '';
  const updatedModules = depsArr.reduce((acc: string[], dependency, idx) => {
    const updatedAst = dependency.source.body.map((item) => {
      if (item.type === 'ImportDeclaration') {
        // replace module imports with ours
        item = getImport(item, depsArr) as any;
      }
      if (item.type === 'ExportNamedDeclaration') {
        // replaces function name with real exported function
        item = getExport(item) as any;
      }
      return item;
    });
    dependency.source.body = updatedAst;

    // Turn AST back into string
    const updatedSource = generate(dependency.source);

    const updatedTemplate = buildModuleTemplateString(updatedSource, idx);

    acc.push(updatedTemplate);
    return acc;
  }, []);

  const bundleString = buildRuntimeTemplateString(
    updatedModules.join(','),
    depsArr.length - 1 // index location
  )

  return bundleString;
};

fs.writeFile('bundle.js', transform(depsGraph('./fileA.js')), (err) => {
  if (err) {
    throw new Error(String(err))
  }
  console.log('New file created!')
});
