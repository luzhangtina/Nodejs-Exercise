const fs = require('fs')

// Rename file Sync
fs.renameSync('./assets/color.json', './assets/colorData.json')

// Move file Async
fs.rename('./assets/colorData.json', './storage/colorData.json', (err) => {
    if (err) {
        throw err
    }
})

setTimeout(() => {
    // Delete colorData.json
    fs.unlinkSync('./storage/colorDelete.json')
}, 4000)