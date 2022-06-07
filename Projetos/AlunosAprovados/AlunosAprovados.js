const alunos = [
    {
        nome : 'João',
        nota : 4,
        turma: '1b',
    },
    {
        nome : 'Sofia',
        nota : 9,
        turma: '1b',
    },
    {
        nome : 'Paulo',
        nota : 6,
        turma: '2c',
    },
    {
        nome : 'Miguel',
        nota : 3,
        turma: '2c',
    },
];
  

function alunosAprovados(array, media){
    let aprovados = [];
    for (let i = 0; i < array.length; i ++){
        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));

