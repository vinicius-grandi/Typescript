"use strict";
function variadicSum(...numbers) {
    return numbers.reduce((total, cV) => total + cV);
}
console.log(variadicSum.bind(null, 4, 6, 7, 8, 5, 4).call(null, ...[]));
