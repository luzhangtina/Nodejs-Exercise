var fs = require('fs')

// Here data is object
var data = require('./data.json')

// The result is Tina. 
console.log(data.name)

fs.readFile('./data.json', 'utf-8',(err, data) => {
    // Here data is string
    console.log(data)

    // Use JSON.parse to convert the string to an object
    var data = JSON.parse(data)

    // The result is Tina
    console.log(data.name)
})