enum Formass {
    Circulo,
    Quadrado,
    Triangulo,
    Retangulo,
}

// enum Formas {
//     Circulo = '0 vertices',
//     Quadrado = '4 vertices',
//     Triangulo = '3 vertices',
//     Retangulo = '4 vertices',
// }

function forma (c:Formass) {
    return `${c} Essa forma é muito braba`
}

console.log(forma(4));