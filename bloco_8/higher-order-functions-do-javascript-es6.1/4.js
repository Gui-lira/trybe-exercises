const counter = (answer, realAnswer) => {
    let count = 0;
    for (let index = 0; index < answer.length; index += 1) {
        if (answer[index] === 'N.A') {

        }
        else if (answer[index] === realAnswer[index]) {
            count += 1
        }
        else {
            count -= 0.5
        }
    }
    return count;
}

const check = (rigthAnswer, studentAnswer, action) => {
    return action(studentAnswer, rigthAnswer);
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'C'];

console.log(check(rightAnswers,studentAnswers, counter))