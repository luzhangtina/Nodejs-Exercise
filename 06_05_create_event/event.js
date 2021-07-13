const events = require('events')

const emitter  = new events.EventEmitter()

// subscribe an event
emitter.on('customEvent', (message, user) => {
    console.log(`${user}: ${message}`)
})

process.stdin.on('data', data => {
    const input = data.toString().trim()
    if (input === "exit") {
        // publish an event
        emitter.emit('customEvent', 'Bye-bye', 'process')
        process.exit()
    }

    // publish an event
    emitter.emit('customEvent', input, 'terminal')
})