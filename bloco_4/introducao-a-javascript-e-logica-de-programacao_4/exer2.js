function palindrome(str) {
    for (let index = 0; index < str.length; index += 1)
        {for (let indexY = str.length - 1;indexY >= 0;indexY -= 1)
            {if (str[index] != str[indexY])
                {return false}
            else {return true}
            }
        }
};
