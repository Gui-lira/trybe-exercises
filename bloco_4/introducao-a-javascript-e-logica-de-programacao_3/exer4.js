let n = 5;
let asterisco = '*';
let space = ' '
let floors = 1
for (let times = 1;times <= 5;times += 2)
    {console.log(space.repeat(((n-times))/2) + asterisco.repeat(times))}