"use strict";
class Pessoa {
    nome() {
        return 'Tania';
    }
}
function mudaThis() {
    let nome = this.nome();
    return nome;
}
console.log(mudaThis.call(new Pessoa));
