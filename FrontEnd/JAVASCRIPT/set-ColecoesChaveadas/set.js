const mySet = new Set();

mySet.add(1);
console.log(mySet);

mySet.add(5);
console.log(mySet);

mySet.has(1);
//true
console.log(mySet);

mySet.has(3);
//false
console.log(mySet);

mySet.delete(5);
console.log(mySet);