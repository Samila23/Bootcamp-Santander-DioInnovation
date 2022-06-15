function verificarPalindromo(string){
    if (!string) return "String inválida";

    return string === string.split('').reverse().join('');
}

function verificarPalindromo2(string){
    if (!string) throw "String inválida";

    return string === string.split('').reverse().join('');
}
console.log( verificarPalindromo('cat'));
console.log( verificarPalindromo2('cat'));