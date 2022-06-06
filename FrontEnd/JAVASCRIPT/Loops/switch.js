function getAnimal(id){
    switch(id){
        case 1: 
            return "cachorro";
        case 2:
            return  "gato";
        case 3:
            return "passáro";
        default:
            return "peixe";
    }
}
console.log(getAnimal(1));