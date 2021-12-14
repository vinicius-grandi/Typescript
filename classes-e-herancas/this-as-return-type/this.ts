class MySet {
    data: number[] = [];

    add(x: number): this
    {
        this.data.push(x)
        return this
    }

    has(x: number): boolean
    {
        return (this.data.find(a => a == x))? true : false
    }
}

let mySet = new MySet

console.log(mySet.add(1))
console.log(mySet.has(1))