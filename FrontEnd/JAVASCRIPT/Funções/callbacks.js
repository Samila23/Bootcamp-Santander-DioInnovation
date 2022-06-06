const calcular = function (operacao, num1 , num2){
    return operacao (num1, num2);
}

const soma = function (num1, num2){
    return num1 + num2;
}

const sub = function (num1, num2){
    return num1 - num2;
}

const resultSoma = calcular(soma, 2, 2);
const resultSub = calcular(sub, 2, 1);

console.log(resultSoma);
console.log(resultSub);