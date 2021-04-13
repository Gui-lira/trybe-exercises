const promise = () => {
    const list = [];
    for (let timer = 0; timer < 10; timer += 1) {
        const number = Math.round(Math.random() * 50) + 1;
        list.push(number);
    };
    const sum = list.map((item) => item * item).reduce((acumulator, item) => acumulator += item);
    if (sum < 8000) return sum
     throw new Error();    
};

const SumReduce = (valor) => {
    let list =  [1,2,3,5,10];
     return list.map((item) =>  valor / item)
    .reduce((acumulator, item) => acumulator + item)
}

const tryPromise = async () => {
   try {
       const total = await promise();
       const x = await SumReduce(total);
       await console.log(x);
   } 
   catch(erro) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
   }
}

tryPromise();