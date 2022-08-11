import path from 'path';
import fs from 'fs';
import meriyah, { parseModule } from 'meriyah';

const depsArray: {
  name: string;
  source: meriyah.ESTree.Program;
}[] = [];

const depsGraph = (file: string) => {
  const fullPath = path.resolve(__dirname, '..', file);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const source = parseModule(fileContents);
  const module = {
    name: fullPath,
    source
  };

  source.body.map((current) => {
    if (current.type === 'ImportDeclaration' && typeof current.source.value === 'string') {
      depsGraph(`${current.source.value}.js`);
    }
  });

  depsArray.push(module);

  return depsArray;
}

console.log(depsGraph('./fileA.js'))
