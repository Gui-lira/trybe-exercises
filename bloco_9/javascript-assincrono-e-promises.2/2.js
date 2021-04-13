
const tryPromise = () => {
const promise = new Promise((resolve, reject) => {
    const list = [];
    for (let timer = 0; timer < 10; timer += 1) {
        const number = Math.round(Math.random() * 50) + 1;
        list.push(number);
    };
    const sum = list.map((item) => item * item).reduce((acumulator, item) => acumulator += item);
    (sum > 8000) ? resolve() : reject();    
});


    promise.then(() => console.log('deu certo'))
    .catch(() => console.log('deu errado'))
}

tryPromise();