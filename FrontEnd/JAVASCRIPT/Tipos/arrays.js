let array = [];
console.log("Adicionando valores ao final do Array");
array.push(3) 
console.log(array);
console.log(`Adicionando valores ao final do Array`);
array.push(2)
console.log(array);
console.log(`Retira valores do final do Array`);
array.pop(2) 
console.log(array);
console.log(`Adicionando valores ao final do Array`);
array.push(2)
console.log(array);
console.log(`Adicionando valores ao final do Array`);
array.push(5)
console.log(array);
console.log(`Retira o primeiro valores ao final do Array`);
array.shift(2)
console.log(array);
console.log(`Adicionando valores ao inicio do Array`);
array.unshift(1)
console.log(array);

for (let i = 0 ; i < array.length ; i ++){
    console.log(array[i]);
}

console.log(`Verificando se existe o valor 3 no array`);
console.log(array.includes(3));


console.log(`Verificando se todos os itens do array é igual 5`);
console.log(array.every(item => item === 5));

console.log(`Verificando se alguns dos itens do array é 5`);
console.log(array.some(item => item === 5));

console.log(`Reverter todo o array`);
console.log(array.reverse());