declare type A = {
    good(x: number): string;
};
declare type B = A & {
    good(x: number | string): string;
};
interface Aa {
    good(x: number): string;
}
interface Bb extends Aa {
    good(x: number | string): string;
}
interface Aa {
    good(x: number): string;
    merging(x: string): boolean;
}
declare let obj: Aa;
