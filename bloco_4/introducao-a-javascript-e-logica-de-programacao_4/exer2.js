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
console.log(minor([2, 4, 6, 7, 10, 0, -3]))