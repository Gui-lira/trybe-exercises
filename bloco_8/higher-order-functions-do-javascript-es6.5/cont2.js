const getNationality = ({ firstName, nationality }) => {
    if (nationality === undefined) {
    const {national = 'brazilian'} = person
    return `${firstName} is ${national}`
    }
    return `${firstName} is ${nationality}`
};

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};
const {nationality = 'brazilian'} = person;

console.table(person)

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));