const fs = require('fs')

// Rename directory name
fs.renameSync('./dirTest', './dir')

// Delete files under ./dirDelete directory
fs.readdirSync('./dirDelete').forEach((fileName) => {
    fs.unlinkSync(`./dirDelete/${fileName}`)
})

// Delete directory
fs.rmdir('./dirDelete', (err) => {
    if (err) {
        throw err
    }
})