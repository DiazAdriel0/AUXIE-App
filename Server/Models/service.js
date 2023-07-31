const { Schema, model } = require('mongoose')

const noteSchema = new Schema({
    name: String,
    numberOfProviders: Number,
    providers: Array,
    category: String,
    counter: Number,
    isActive: Boolean,
})

const Service = model('Service', noteSchema)

module.exports = Service
