var request = require('request')

describe('post message', () => {
    it('should return 200', (done) => {
        request({
            url: 'http://localhost:3000/messages', 
            method: 'POST',
            json: {name: 'Hash', message: 'Sure, tell me.'}
        }, 
        (err, res, body) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
})