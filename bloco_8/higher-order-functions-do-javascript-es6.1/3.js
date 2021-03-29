const checkAnswer = (answer) => (realAnswer) => {
    return answer.toLowerCase() === realAnswer.toLowerCase()
}

// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTIO';

console.log(checkAnswer(correctAnswer)(userAnswer))