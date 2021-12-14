// type NoArvore = {
//     value: string
// }

// type NoFolha = NoArvore & {
//     isLeaf: true
// }

// type NoInterno
//  = NoArvore & {
//     children: [NoArvore] | [NoArvore, NoArvore]
// }

// let a: NoArvore = {value: 'Pai de todos'}
// let b: NoFolha = {value: 'Filho de C', isLeaf: true}
// let c: NoInterno
//  = {value: 'Pai de B', children: [b]}

// function mapNode<T extends NoArvore>(
//     node: T,
//     f: (value: string) => string
//    ): T {

//     return {
//     ...node,
//     value: f(node.value),
//     }
// }

// let a1 = mapNode(a, _ => _.toUpperCase()) // NoArvore
// let b1 = mapNode(b, _ => _.toUpperCase()) // NoFolha
// let c1 = mapNode(c, _ => _.toUpperCase()) // NoInterno

// console.log(b1)

// Multiple constraints

type Chassi = {temChassi: true}
type Rodas = {temRodas: true}

let carroSimples: Chassi & Rodas = {
    temChassi: true,
    temRodas: true
}

function criaCarroPoderoso<T extends Chassi & Rodas>(carroSimples: T): T{
    return {
        ...carroSimples,
        cavalos: 10000
    }
}

const carroPoderoso = criaCarroPoderoso(carroSimples)
console.log(carroPoderoso)