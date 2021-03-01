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
}
console.log(greaterWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))