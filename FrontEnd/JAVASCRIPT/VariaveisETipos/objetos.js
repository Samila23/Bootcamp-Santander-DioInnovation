let obj = {};

let person = {
    name: "Samila",
    age : 20,
    adress: "Rua 02"
}
//Criandos Chaves para o objeto e atribuindo valores
obj.name = "julia";
obj.age = 20;

//Atribuindo novos atributos e valores para um object
person["NumeroDeIrmaos"]=3;

console.log("Exibindo valores do Obj");
console.log(Object.values(obj));

console.log("Exibindo atributos (Chaves)");
console.log(Object.keys(obj));

console.log("Exibindo atributos (Chaves)");
console.log(Object.keys(obj));

console.log("Exibindo todo os objeto");
console.log(person);

console.log(" 1° ex: Exibindo o valores de um atributo especifico");
console.log(person.name);

console.log(" 2° ex: Exibindo o valores de um atributo especifico");
console.log(person["name"]);

//Atribuindo o valor de uma variavel para um atributo do objeto
let mae = "NomeDaMae";
person[mae] = "Maria";
console.log("Exibindo todo os objeto");
console.log(person);