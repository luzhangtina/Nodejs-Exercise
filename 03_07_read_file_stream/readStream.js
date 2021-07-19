const fs = require('fs')

const readStream = fs.createReadStream('./color.json', 'UTF-8')

let fileText = ""

// Read stream block by block. Max block is 65535 characters
readStream.on('data', data => {
    console.log(`I read ${data.length - 1} characters of text`)
    fileText += data
})

readStream.once('data', data => {
    console.log(data)
})

readStream.on('end', () => {
    console.log("finished reading file")
    console.log(`In total I read ${fileText.length - 1} characters of text`)
})