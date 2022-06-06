const user = {
    id : 42,
    displayName: 'Jdoe',
    fullName: {
        firsName: 'John',
        lasName:   'Doe'
    }
};

function userId({id}){
    return id;
}
function getFullName({fullName: {firsName: fisrt, lasName: last}}){
    return `${fisrt} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));