let varAny: any;
let varUnk: unknown;
console.log(varAny.toFixed());

if(typeof varUnk == 'number'){
    console.log(varUnk.toFixed());
}

export {};
