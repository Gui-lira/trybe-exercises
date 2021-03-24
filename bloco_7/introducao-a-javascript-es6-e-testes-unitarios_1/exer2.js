let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens = `Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados de forma crescente!`

console.log(oddsAndEvens);

const fatorial = (n) => n === 0 ? 1 : n * fatorial(n-1)

console.log(fatorial(6))