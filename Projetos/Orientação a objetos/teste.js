// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
//let lines = gets().split('\n');
var N = 6;

for (let i = 1; i <= N; i++) {
    console.log(i);
//TODO: Complete os espaços em branco com uma possível solução para o desafio

	if (i % 2 == 0 ) {
        var pontencia = Math.pow(2, i) ;
        console.log(`${i}^2 = ${pontencia}`);
    }

}