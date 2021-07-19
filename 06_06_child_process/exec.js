const cp = require('child_process')

// Run command Sync, get command error message
cp.exec('lst', (err, data, stderr) => {
    console.log(stderr)
})

// Run command Sync, get command returned output
cp.exec('ls', (err, data) => {
    console.log(data)
})