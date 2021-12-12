function error(message: string): never {
    throw new Error(message);
}

console.log(error('Erro de Mensagem - 01'));