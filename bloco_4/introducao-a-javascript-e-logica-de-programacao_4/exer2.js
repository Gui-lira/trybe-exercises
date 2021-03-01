function palindrome(str) {
    for (let index = 0; index < str.length; index += 1)
        {for (let indexY = str.length - 1;indexY >= 0;indexY -= 1)
            {if (str[index] != str[indexY])
                {return false}
            else {return true}
            }
        }
};
function minor(numbers) {let minor = numbers[0];
                        for (let index in numbers)
                                {if (numbers[index] < minor)
                                    {minor = numbers[index]}
                                };
                        return minor; };

function greaterWord(words) {
    let greater = words[0];
    for (let index in words)
        {if (words[index].length > greater.length)
            {greater = words[index]}
        }
    return greater;    
};

function mostRepetitive(array) {
    let map = {};
    let maxValue = 0;
    let maxItem;
    for (let index in array) 
        {if (map[index] === undefined)
            {map[index] = 1}
        else {map[index] += 1}
        if (map[index] > maxValue)
            {maxValue = map[index];
            maxItem = array[index]}
        };
    return maxItem;
};
function sumN(n) {
    let sum = 0;
    for (let numbers = 1;numbers <= n;numbers += 1)
        {sum += numbers};
    return sum;
};
console.log(sumN(5))
