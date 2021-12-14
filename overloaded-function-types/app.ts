
type Tipos = {
    (msg: string, tipo2: number, optional: string): number | boolean | string
    (msg: string, optional: boolean): number | boolean | string
}

const fn: Tipos = (
    msg,
    numberOrBolean,
    optional?
    ) => {

    let numOrbool: number | boolean = true;

    if(typeof numberOrBolean == 'number') {
        numOrbool = numberOrBolean
    } else if(typeof numberOrBolean == 'boolean') {
        numOrbool = numberOrBolean
    }

    return msg + numOrbool + optional
}

console.log(fn('Temos o valor: ', 12, ' Maneiro'))