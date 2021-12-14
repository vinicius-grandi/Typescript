// [Hard] Update our call implementation from earlier in the chapter (“Using
// bounded polymorphism to model arity” on page 77) to only work for functions
// whose second argument is a string. For all other functions, your implementa‐
// tion should fail at compile time.

type mustBeString = [unknown, string, ...unknown[]]

function call<T extends mustBeString, R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
}

function pushNum(length: number, value: number): number[] {
    let res: Array<number> = []
    res.push(length, value)
    return res
}

console.log(call(fill, 10, '2'))