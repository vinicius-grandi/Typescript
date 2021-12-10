const laminas: string[] = ['Espada', 'Facão', 'Kunai'];
const laminas2: Array<string> = ['Peixeira', 'Faca de pão', 'Katana'];

laminas.push(...laminas2);
console.log(laminas.length)

for(const i of laminas) {
    console.log(i)
}