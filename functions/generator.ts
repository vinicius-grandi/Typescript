function* contar() {
    let a = 0
    
    while(true) {
        yield a
        a = ++a 
    }
}

const contador = contar()

console.log(contador.next())
console.log(contador.next())
console.log(contador.next())