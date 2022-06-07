function somaNumeros (array) {
    return array.reduce(function (prev, current){
        console.log("Anterior",prev);
        console.log("Posterior",current);
        return prev + current;
    });
}
const array = [1,2];

console.log(somaNumeros(array));