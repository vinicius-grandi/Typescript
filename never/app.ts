function err(message: string): never {
    throw new Error(message);
}

console.log(err('Erro de Mensagem - 01'));