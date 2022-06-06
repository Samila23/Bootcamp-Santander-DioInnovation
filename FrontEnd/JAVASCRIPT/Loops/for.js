function multiplicacaoPorDois(array){
    let multiplicados = [];
     for ( let i = 0; i < array.length ; i ++){
        multiplicados.push(array[i] * 2);
     }
     return multiplicados;
}
const meusNumeros = [ 2,2,2,2,2];
console.log(multiplicacaoPorDois(meusNumeros));

