var fs = require('fs')

var data = {
    name: 'Tina'
}

fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('Write finished ' + err)
})