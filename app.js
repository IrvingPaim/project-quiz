const form = document.querySelector('.quiz-form')
const finalScore = document.querySelector('.container-score')
const containerQuiz = document.querySelector('.container-quiz')
const buttonReset = document.querySelector('.button-reset')

const correctAnswers = ['D', 'B', 'A', 'A', 'B', 'B', 'D', 'C', 'B', 'C']

let score = 0

const getUserAnswers = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })
    
    return userAnswers
}

const calculateuserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]
        if (isUserAnswerCorrect) {
            score += 10
        }
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScore.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }     

        finalScore.querySelector('span').textContent = `${counter++}%`
    },30)
}

buttonReset.addEventListener('click', () => {
    finalScore.classList.add('d-none')
})

form.addEventListener('submit', event => {
    event.preventDefault()

    score = 0

    const userAnswers = getUserAnswers()

    calculateuserScore(userAnswers)   
    showFinalScore()
    animateFinalScore()

})






