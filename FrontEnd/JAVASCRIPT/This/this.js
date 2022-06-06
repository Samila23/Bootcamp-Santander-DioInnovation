const pessoa = {
    nome : "Sâmila",
    sobreNome: "Dias",
    id: 1,
    nomeCompleto: function (){
        return this.nome + " " + this.sobreNome;
    },
    getId: function(){
        return this.id;
    }
};
console.log(pessoa.nomeCompleto());
console.log(pessoa.getId());