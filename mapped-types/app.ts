interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Mateus',
  age: 25,
};

const personPartial: Partial<Person> = {
  name: 'Mateus',
};

const personReadOnly: Readonly<Person> = {
  name: 'Mateus',
  age: 21,
};
// personReadOnly.name = 'jojo' erro por causa da propriedade ser readonly

type Stringify<T> = {
  [P in keyof T]: string;
};

const stringPerson: Stringify<Person> = {
  name: 'João de Barro',
  age: '55',
};
