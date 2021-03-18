let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multi = [];
for (let i = 1;i < numbers.length;i++)
       {if (i == numbers.length - 1)
            {multi.push(numbers[i]*2)}
        else {multi.push(numbers[i]*numbers[i+1])}}
console.log(multi)