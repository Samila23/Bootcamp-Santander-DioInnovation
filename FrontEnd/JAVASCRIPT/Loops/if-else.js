function numeroPositivo(num){
    let resultado;

    if (num < 0) {
        resultado = false;
    }
    else {
        resultado = true;
    }

    return resultado;
}
console.log(numeroPositivo(-1));