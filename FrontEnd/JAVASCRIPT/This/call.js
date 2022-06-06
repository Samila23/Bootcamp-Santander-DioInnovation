const pessoa = {
    nome : "Miguel",
};
const animal = {
    nome : "Murphy",
};
function getSomeThis(){
    console.log(this.nome);
}
console.log(getSomeThis.call(animal));
console.log(getSomeThis.call(pessoa));

const myObj = {
    num1 : 2,
    num2 : 4
};
function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}
console.log(soma.call(myObj, 1 , 5));