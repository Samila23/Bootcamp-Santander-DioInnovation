function logLetras(palavra){
    for ( letra of palavra){
        console.log(letra);
    }
}
function logNumeros(nums){
    for (num of nums){
        console.log(num);
    }
}
const palavra = "abacaxi";
console.log(logLetras(palavra))

const nums = [30,20,233,2];
console.log(logLetras(nums))