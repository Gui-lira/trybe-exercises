const employes = (name, email) => {
    return {
        nome: name,
        email: email
    }
}

let counter = 0

const newEmĺoyes = (name) => {
    counter += 1;
    id = 'id' + counter
    let newEmail = name.split(' ');
    newEmail = newEmail.join('_');
    newEmail += '@trybe.com';
    return  `${id}: ${ Object.values(employes(name, newEmail))}`
};


console.log(newEmĺoyes('elieser augusto'))