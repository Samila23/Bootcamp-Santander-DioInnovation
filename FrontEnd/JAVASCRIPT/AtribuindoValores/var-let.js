var a = 1;
var b = 2;
if (a === 1){
    var a = 11; //Global
    let b = 22;//Local

    console.log(a); //Valor = 11
    console.log(b);//Valor = 22
}

console.log(a); //Valor = 11
console.log(b);//Valor = 2