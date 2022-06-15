// const MeuErro = new Error ('Mensagem inválida');
// throw MeuErro;

const MeuErro2 = new Error ('Mensagem inválida');
MeuErro2.name = 'InvalidMenssage';
throw MeuErro2;