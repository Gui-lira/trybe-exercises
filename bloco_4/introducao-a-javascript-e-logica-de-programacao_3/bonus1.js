let n = 7;
let asterisco = '*';
let space = ' '
let floors = 1
for (let times = 1;times <= n;times += 2)
    {if (times === 1 || times === n)
        {console.log(space.repeat((n-times)/2) + asterisco.repeat(times) )}
    else {console.log(space.repeat((n-times)/2) + asterisco + space.repeat(times-2) + asterisco)}}