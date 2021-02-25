let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0];

for (let indice = 0;indice < numbers.length;indice++)
    {if (menor > numbers[indice])
        {menor = numbers[indice]}};

console.log(menor)