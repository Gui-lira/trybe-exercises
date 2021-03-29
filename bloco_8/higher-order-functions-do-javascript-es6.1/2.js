const generate = () => {
    return Math.ceil(Math.random()*5)
}

const check = (number, randomNumber) => {
    if (number === randomNumber) {
        return 'Parabéns você ganhou'
     } 
     else {
         return 'Tente novamente'
     }
}

console.log(check(1, generate()))