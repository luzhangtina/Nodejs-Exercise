var express = require('express')

var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')
var uri = "mongodb+srv://user:testuserpassword@cluster0.9uuen.mongodb.net/Nodejs-Exercise?retryWrites=true&w=majority"

app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

var oldMessages = [
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
    res.send(oldMessages)
})

app.post('/messages', (req, res) => {
    oldMessages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200)
}) 

io.on('connection', (socket) => {
    console.log('a user is connected')
})

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log('mongo DB is connnected', err)
})

var server = http.listen(3000, () => {
    console.log("Server is listening on port " + server.address().port)
})
