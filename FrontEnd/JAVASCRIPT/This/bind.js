const retornaNomes = function (){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

console.log(bruno());