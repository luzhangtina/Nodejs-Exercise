const fs = require('fs')

const writeStream = fs.createWriteStream('./colorWrite.txt', 'UTF-8')
const readStream = fs.createReadStream('./color.json', 'UTF-8')

readStream.on('data', data => {
    writeStream.write(data)
})

readStream.pipe(writeStream)
