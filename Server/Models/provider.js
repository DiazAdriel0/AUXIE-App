const { Schema, model } = require('mongoose')

const providerSchema = new Schema({
    isActive: Boolean,

    firstName: String,
    lastName: String,
    age: Number,
    adress: String,

    email: String,
    username: String,
    password: String,
    registerDate: Date,

    services: Array,
    pendingServices: Array,
    completedWorks: Array,
    ratings: Array,
    averageRating: Number,
    reviews: Array,
})

const Provider = model('Provider', providerSchema)

module.exports = Provider
