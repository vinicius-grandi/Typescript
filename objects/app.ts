export interface Pessoa {
    nome: string;
}

interface Sonhos {
    sonhos: string;
}

interface Sonhador extends Pessoa, Sonhos {
    anos: number;   
}

class LendarioSonhador implements Sonhador {
    public nome = 'Jaimin Pocas';
    public sonhos = 'lendários';
    public anos = 12;
}

type Calculadora = {
    soma?: number;
    sub?: number;
}

const somar: Calculadora = {
    soma: 42,
}

const sub: Calculadora = {
    sub: 1,
}

function calculadoraGenerica<T>(calculadora: T): T {
    return calculadora
}

calculadoraGenerica<Calculadora>(somar)