const { Schema, model } = require('mongoose')

const consumerSchema = new Schema({
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    address: String,
    image: String,
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    usernameLower: String,
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now,
        immutable: true 
    },
    ratings: Array,
    averageRating: Number,
    favoritesProviders: Array,
    contractedServices: Number,
    requiredServices: Array
})

consumerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    },
})

const Consumer = model('Consumer', consumerSchema)

module.exports = Consumer
