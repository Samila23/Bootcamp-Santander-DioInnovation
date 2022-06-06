function verificaPalindromo(string){
    if (!string ) return "String Inexistente";

    //Separa a string por espaço, depois põe em ordem contrária, e depois converte novamente em string;
    return string.split("").reverse().join("") === string 
}

function verificaPalindromo2(string){
    if (!string ) return "String Inexistente";

    for (let i = 0 ; i < string.length / 2 ; i ++){
        if(string[i] !== string[string.length -1 - i] ){
            return false;
        }
    }

    return true; 
}

console.log(verificaPalindromo2("abba"));