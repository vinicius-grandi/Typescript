declare type mustBeString = [unknown, string, ...unknown[]];
declare function call<T extends mustBeString, R>(f: (...args: T) => R, ...args: T): R;
declare function fill(length: number, value: string): string[];
declare function pushNum(length: number, value: number): number[];
