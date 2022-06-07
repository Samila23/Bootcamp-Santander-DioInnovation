const myMap = new Map();

console.log(myMap.set('apple', 'fruit'));
// Map(1) {"apple" => "fruit"}
console.log(myMap.get("apple"));
//"Fruit"
console.log(myMap.delete("apple"));
//True
console.log(myMap.get("apple"));
//undefined