declare type Chassi = {
    temChassi: true;
};
declare type Rodas = {
    temRodas: true;
};
declare let carroSimples: Chassi & Rodas;
declare function criaCarroPoderoso<T extends Chassi & Rodas>(carroSimples: T): T;
declare const carroPoderoso: Chassi & Rodas;
