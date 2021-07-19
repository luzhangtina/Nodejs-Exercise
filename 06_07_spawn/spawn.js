const cp = require('child_process')

// Run askQuestion app in 06_04_create_module
const questionApp = cp.spawn('node', ['../06_04_create_module/askQuestion.js'])

// Get questionApp output
questionApp.stdout.on('data', data => {
    console.log(`from the question app: ${data}`)
})

// Get user input and pass to questionApp
process.stdin.on('data', data => {
    questionApp.stdin.write(data)
})

// Listening questionApp close event
questionApp.on('close', () => {
    console.log(`questionApp process exited`)
    process.exit()
})