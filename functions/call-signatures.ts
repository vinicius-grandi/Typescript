"use strict"
type Saudar = {
    salve: () => string
}

const salvou: Saudar = {
    salve: () => {
        return 'ola'
    }
}

console.log(salvou.salve())