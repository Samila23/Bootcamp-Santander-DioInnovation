function getAdmins(map){
    let admins = [];
    for ([key , value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Sâmila', 'Admin');
usuarios.set('Joana', 'User');
usuarios.set('Lucas', 'Admin');

console.log(getAdmins(usuarios));