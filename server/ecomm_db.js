const mongoose = require('mongoose')

const database = mongoose.createConnection('mongodb://localhost/ecomm', ()=>console.log('Database connected'))

module.exports = database