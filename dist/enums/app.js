"use strict";
var Formass;
(function (Formass) {
    Formass[Formass["Circulo"] = 0] = "Circulo";
    Formass[Formass["Quadrado"] = 1] = "Quadrado";
    Formass[Formass["Triangulo"] = 2] = "Triangulo";
    Formass[Formass["Retangulo"] = 3] = "Retangulo";
})(Formass || (Formass = {}));
function forma(c) {
    return `${c} Essa forma é muito braba`;
}
console.log(forma(4));
