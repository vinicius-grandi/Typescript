// Exemplo 1
// type Filter = {
//     <T>(array: T[], fn: (item: T) => boolean): T[]
// }

// const filter: Filter = (array, fn) => {
//     let res = []

//     for(let i = 0; i < array.length; i++) {
//         let item = array[i]

//         if(fn(item)) {
//             res.push(item)
//         }
//     }
    
//     return res
// }

// const names = [
//     'Jussara',
//     'Everton',
//     'Sophia',
//     'Claúdia',
//     'Paulo',
//     'Ricardo',
//     'Ana',
//     ]

// console.log(filter(names, (_: unknown) => typeof _ == 'string' && _.length > 6))

function mapping <T, U>(array: T[], fn: (item: T) => U): U[] {
    let res = []

    for(let i = 0; i < array.length; i++) {
        res[i] = fn(array[i])
    }

    return res
}

console.log(mapping([2, 4, 5, 6,], _ => _.toString()))