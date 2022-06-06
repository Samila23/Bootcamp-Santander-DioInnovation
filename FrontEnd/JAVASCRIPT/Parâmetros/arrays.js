function sum (x,y,z){
    return x + y + z;
}
const numbers = [1,2,3]
console.log(sum(...numbers));


function confereTamanho(...args){
    console.log(args.length);
}
console.log(confereTamanho());
console.log(confereTamanho(1,2));
console.log(confereTamanho(1,2,3));