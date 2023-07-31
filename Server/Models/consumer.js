const { Schema, model } = require('mongoose')

const consumerSchema = new Schema({
    isActive: Boolean,
    isAdmin: Boolean, 

    firstName: String,
    lastName: String,
    age: Number,
    adress: String,

    email: String,
    username: String,
    password:  String,
    registerDate: Date,
 
    ratings: Array,
    averageRating: Number,
    favoritesProviders: Array,
    contractedServices: Number,
    requiredServices: Array,


})

const Consumer = model('Consumer', consumerSchema)

module.exports = Consumer
