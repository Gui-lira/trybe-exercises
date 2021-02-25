let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let quantImpar = 0;

for (let indice = 0;indice < numbers.length;indice++)
    {if (numbers[indice] % 2 != 0)
        {quantImpar += 1}};

console.log(quantImpar)