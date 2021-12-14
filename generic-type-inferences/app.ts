let promise = new Promise<string>(resolve =>
    resolve('maravilha')
)
   promise.then(result =>
    console.log(result.toUpperCase())
)