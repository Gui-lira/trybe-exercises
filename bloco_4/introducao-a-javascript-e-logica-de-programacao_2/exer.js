let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0];

for (let indice = 0;indice < numbers.length;indice++)
    {if (maior < numbers[indice])
        {maior = numbers[indice]}};

console.log(maior)