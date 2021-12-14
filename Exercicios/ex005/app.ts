function is<T>(value1: T, ...value2: [T, ...T[]]): boolean {
    return value2.every(_ => _ === value1)
}

console.log(is('string', 'k', 'k'))