function defineTipo<T>() {
    let strOuNum: T

    function setTipo(valor: T) {
        strOuNum = valor
    }

    return { setTipo }
}

const definir = defineTipo<number>()

definir.setTipo(124)