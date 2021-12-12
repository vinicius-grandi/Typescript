type Filter = {
    <T>(array: T[], fn: (item: T) => boolean): T[]
}

const filter: Filter = (array, fn) => {
    let res = []

    for(let i = 0; i < array.length; i++) {
        let item = array[i]

        if(fn(item)) {
            res.push(item)
        }
    }
    
    return res
}

const names = [
    'Jussara',
    'Everton',
    'Sophia',
    'Claúdia',
    'Paulo',
    'Ricardo',
    'Ana',
    ]

console.log(filter(names, (_: unknown) => typeof _ == 'string' && _.length > 6))