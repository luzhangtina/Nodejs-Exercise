const fs = require('fs')

const dir = 'storage-files'

if (fs.existsSync(dir)) {
    console.log('directory exists')
    process.exit()
}
fs.mkdir(dir, (err) => {
    if (err) {
        throw err
    }
    console.log('directory created')
})