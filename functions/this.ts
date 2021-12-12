class Pessoa {
   nome(): string {
       return 'Tania'
   }
}

function mudaThis(this: Pessoa): string {
    let nome = this.nome()
    return nome
}

console.log(mudaThis.call(new Pessoa))