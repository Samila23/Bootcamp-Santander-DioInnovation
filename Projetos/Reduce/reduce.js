function somaNumeros (array) {
    return array.reduce(function (prev, current){
        console.log("Anterior",prev);
        console.log("Posterior",current);
        return prev + current;
    });
}
const array = [1,2];

console.log(somaNumeros(array));

let array2 = [1, 2, 3, 4];

array.reduce((current, acc) => current + acc);
console.log(somaNumeros(array));