const { Schema, model } = require('mongoose')

const noteSchema  = new Schema({
        name: String,
        category: String,
        counter: Number,
})

const Service = model('Service', noteSchema)

module.exports = Service
