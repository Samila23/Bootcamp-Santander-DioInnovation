//Retorna atributos
function forIn(obj){
    for(prop in obj){
       console.log(prop);
    }
 }
 //Retorna valores dos atributos
 function forIn2(obj){
    for(prop in obj){
       console.log(obj[prop]);
  
    }
 }
 const meuObjeto = {
    nome: "João",
    idade:"20",
    cidade:"Salvador"
 }
 console.log(forIn(meuObjeto));
 console.log(forIn2(meuObjeto));