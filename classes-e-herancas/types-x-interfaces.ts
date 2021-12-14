type A = {
    good(x: number): string
}

type B = A & {
    good(x: number | string): string
}

interface Aa {
    good(x: number): string
}

interface Bb extends Aa  {
    good(x: number | string): string
}

interface Aa {
    good(x: number): string
    merging(x: string): boolean
}

let obj: Aa = {
    good(x) {
        return 'a'
    },
    
    merging(x) {
        return true
    }
}