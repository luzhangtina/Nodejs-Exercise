var express = require('express')

var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')
var uri = "mongodb+srv://user:testuserpassword@cluster0.9uuen.mongodb.net/Nodejs-Exercise?retryWrites=true&w=majority"

app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

var Message = mongoose.model('Message', {
    name: String,
    message: String
})

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
})

app.post('/messages', async (req, res) => {
    var message = new Message(req.body);
    try {
        var result = await message.save()
        io.emit('message', req.body)
        res.sendStatus(200)
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
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
