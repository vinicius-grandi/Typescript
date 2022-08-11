const lm: string[] = ['Espada', 'Facão', 'Kunai'];
const lm2: Array<string> = ['Peixeira', 'Faca de pão', 'Katana'];

lm.push(...lm2);
console.log(lm.length)

for(const i of lm) {
    console.log(i)
}