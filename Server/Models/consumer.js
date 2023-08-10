const { Schema, model } = require('mongoose')

const consumerSchema = new Schema({
    isActive: {
        type: Boolean,
        required: true,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: String,
    age: {
        type: Number,
        min: 18,
    },
    address: String,
    image: String,
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    usernameLower: String,
    password: {
        type: String,
    },
    registerDate: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    ratings: Array,
    averageRating: Number,
    favoritesProviders: Array,
    contractedServices: Number,
    requiredServices: Array,
    googleId: {
        type: String,
        default: '',
    },
    userUid: {
        type: String,
    },
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
