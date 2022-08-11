declare type Tipos = {
    (msg: string, tipo2: number, optional: string): number | boolean | string;
    (msg: string, optional: boolean): number | boolean | string;
};
declare const fn: Tipos;
