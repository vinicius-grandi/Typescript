interface Person {
    name: string;
    age: number;
}
declare const person: Person;
declare const personPartial: Partial<Person>;
declare const personReadOnly: Readonly<Person>;
declare type Stringify<T> = {
    [P in keyof T]: string;
};
declare const stringPerson: Stringify<Person>;
