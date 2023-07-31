const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({
    name: String,
    numberOfProviders: Number,
    providers: Array,
    category: String,
    counter: Number,
    isActive: Boolean,
})

const Service = model('Service', serviceSchema)

module.exports = Service
