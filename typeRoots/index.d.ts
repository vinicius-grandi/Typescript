type CodeType = {
  type: string;
  declarations: [
    {
      type: string;
      id: {
        type: string;
        name: string;
      };
      init: {
        type: string;
        value: any;
      };
    }
  ];
  kind: 'const' | 'let' | 'var';
};

type Ast = {
  type: string;
  body: CodeType[];
};

declare module 'abstract-syntax-tree' {
  function parse(file: string): Ast;
}
