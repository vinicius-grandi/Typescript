// let cliente: [string, number, string] = ['Túlio', 12, 'Macarronada'];

// console.log(cliente);

// const frutas = ['Melancia', 'Tomate', 'Romã', 'Goiaba'];
// const listaFrutas: [string, ...string[]] = ['Abacate', ...frutas];

// console.log(...listaFrutas);
// let endereco = ['Rua Daniel Barbosa', '634', 'Vila Nova']

// let cliente: [nome: string, id: number, pedido: string, ...endereco: string[]] = ['Túlio', 12, 'Macarronada', ...endereco];

// console.log(cliente);

// function criarPessoas(nome: string[], idade: number[], sexo: string[]) {
//     return [...nome, ...idade, ...sexo];
// }

// const pessoas:Array<any> = criarPessoas(['Paulo', 'Rogério', 'Eduardo', 'jaime'], [15, 95, 32], ['masculino', 'feminino', 'masculino']);

// console.log(pessoas);

type Nome = 
|[nome: string]
|[nome: string, sobrenome: string]

function nomear(nome: Nome): string[] {
    return [...nome];
}

console.log(nomear);
