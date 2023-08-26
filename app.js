const form = document.querySelector('.quiz-form')
const pScore = document.querySelector('.score')

const correctAnswers = ['D', 'B', 'A', 'A', 'B', 'B', 'D', 'C', 'B', 'C']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value,
        form.inputQuestion7.value,
        form.inputQuestion8.value,
        form.inputQuestion9.value,
        form.inputQuestion10.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 10
        }
    })

    pScore.textContent = `Você acertou ${score}% do Quiz!`    
    scrollTo(0, 0)

})


