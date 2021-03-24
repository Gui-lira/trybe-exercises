let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens = `Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados de forma crescente!`

console.log(oddsAndEvens);

const fatorial = (n) => n === 0 ? 1 : n * fatorial(n-1);

console.log(fatorial(6));

const  longestWord = (str) => {
    let list = str.split(' ');
    let longest = list[0];
    for (let index = 0; index < list.length; index += 1) {
        longest.length < list[index].length ? longest = list[index] : longest = longest
    }
    return longest;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));