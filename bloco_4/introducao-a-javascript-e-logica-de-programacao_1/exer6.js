let peca= '';
let pecaL = peca.toLowerCase();

switch (pecaL)
    {case 'king':
    console.log('all, one');
    break;
    case 'queen':
    console.log('all');
    break;
    case 'bishop':
    console.log('diagonals');
    break;
    case 'rook':
    console.log('line or row');
    break;
    case 'knight':
    console.log('L shape');
    break;
    case 'pawn':
    console.log('straigth');
    break;
    default:
    console.log('erro')};