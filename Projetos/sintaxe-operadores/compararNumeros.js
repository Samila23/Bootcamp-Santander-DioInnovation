function comparaNumeros(a,b){
    if (a === b){
        var soma = a + b;
        if ( soma > 10 && soma< 20){
            console.log(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
        }
        else{
            if ( soma > 10 || soma< 20){
                console.log(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é menor que 10 ou maior que 20`);
            }
        }
    }
    else{
        var soma = a + b;
        if ( soma > 10 && soma< 20){
            console.log(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
        }
        else{
            if ( soma > 10 || soma< 20){
                console.log(`Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é menor que 10 ou maior que 20`);
            }
        }
    }
}


comparaNumeros(5,6);