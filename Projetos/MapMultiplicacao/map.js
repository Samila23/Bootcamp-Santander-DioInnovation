const maca = {
    value : 2,
}
const laranja = {
    value : 3,
}


function mapComThis(array , thisArg){
    return array.map(function(item) {
        return item * this.value;
    }, thisArg);
}
const nums = [1,2]
console.log("This -> maçã ", mapComThis(nums, maca));
console.log("This -> laranja ", mapComThis(nums, laranja));