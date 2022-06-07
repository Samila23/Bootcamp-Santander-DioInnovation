//Sintaxe completa
const helloWorld = () => {
    return "hello World";
}
//Com apenas 01 linha pode ficar fora das {}
const helloWorld2 = () => "hello World";

console.log(helloWorld());
console.log(helloWorld2());

//Recebendo parâmetros
const soma = (a,b) => a + b ;
console.log(soma(4,6));

//Recebendo 01 parâmetro
const soma2 = (a) => a ;
console.log(soma2(4));