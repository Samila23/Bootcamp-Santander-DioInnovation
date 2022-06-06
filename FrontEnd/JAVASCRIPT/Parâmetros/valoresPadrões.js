function exponecial(array , num){
    if ( num === undefined){
        num = 1;
    }
    const result = [];

    for (let i = 0 ; i < array.length; i ++){
        result.push(array[i] ** num);
    }
    return result;
}

console.log(exponecial([1,2,3,4]));
console.log(exponecial([1,2,3,4], [4]));

function exponecial2(array , num = 1){
    const result = [];

    for (let i = 0 ; i < array.length; i ++){
        result.push(array[i] ** num);
    }
    return result;
}

console.log(exponecial2([1,2,3,4]));
console.log(exponecial2([1,2,3,4], [4]));