const {inc, dec, getCount} = require('./myModule')

inc()
inc()
inc()

console.log(getCount())

dec()
dec()

console.log(getCount())