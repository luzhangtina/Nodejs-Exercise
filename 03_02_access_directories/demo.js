var fs = require('fs')

fs.readdir('../', (err, data) => {
    // data is an array
    console.log(data)

    data.forEach((value, index) => {
            console.log('value: ' + value + ' index: ' + index)
        }
    )
})