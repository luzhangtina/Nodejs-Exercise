const collectAnswers = require('./lib/collectAnswers')

const questions = [
    'What is your name? ',
    'Where do you live? ',
    'What are you going to do with node js? '
]

const answerEvent = collectAnswers(questions)

answerEvent.on('answer', (answer) => {
    console.log(`Question answered: ${answer}`)
})

// First subscription on complete event
answerEvent.on('complete', (answers) => {
    console.log(`Here are all answers: ${answers}`)
})

// Second subscription on complete event
answerEvent.on('complete', (answers) => {
    console.log(`Thanks for your answers!`)
    process.exit()
})
