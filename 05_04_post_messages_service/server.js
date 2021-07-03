// Express v4.16.0 and higher
// --------------------------
var express = require('express')

var app = express()

app.use(express.static(__dirname))
app.use(express.json() )
app.use(express.urlencoded({extended: true}))

var Message = [
    {
        name: 'Tina',
        message: 'Hello'
    },
    {
        name: 'Hash',
        message: 'Hi'
    }
]

app.get('/messages', (req, res) => {
    res.send(Message)
})

app.post('/messages', (req, res) => {
    Message.push(req.body)
    res.sendStatus(200)
}) 

var server = app.listen(3000, () => {
    console.log("Server is listening on port " + server.address().port)
})