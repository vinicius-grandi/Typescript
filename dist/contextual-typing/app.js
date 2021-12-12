"use strict";
function times(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
times(function (i) { console.log(i); }, 4);
