declare function printType(value: number | string): string;
interface Developer {
    name: string;
    language: string;
}
interface Designer {
    name: string;
    software: string;
}
declare const dev: Developer;
declare const des: Designer;
declare const isDeveloper: (value: Designer | Developer) => value is Developer;
declare function printSkill(person: Designer | Developer): void;
