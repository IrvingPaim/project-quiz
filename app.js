const form = document.querySelector('.quiz-form')
const finalScore = document.querySelector('.container-score')
const containerQuiz = document.querySelector('.container-quiz')
const buttonReset = document.querySelector('.button-reset')

const correctAnswers = ['D', 'B', 'A', 'A', 'B', 'B', 'D', 'C', 'B', 'C']

let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) => 
    form[`inputQuestion${index + 1}`].value)
    
const calculateUserScore = userAnswers => {
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

    calculateUserScore(userAnswers)   
    showFinalScore()
    animateFinalScore()
})






