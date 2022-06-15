function verificaPalindromo(string){
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}
function tryCatchExemplo(string){
    try{
        verificaPalindromo(string);
    }
    catch(e){
        console.log(e);
    }
}

function tryCatchExemplo2(string){
    try{
        verificaPalindromo(string);
    }
    catch(e){
        throw e;
    }
}

console.log(tryCatchExemplo(''));
console.log(tryCatchExemplo2(''));