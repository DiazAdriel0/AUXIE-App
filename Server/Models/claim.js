const { Schema, model } = require('mongoose')

const consumerSchema = new Schema({
    pending: {
        type: Boolean,
        default: true,
    },
    consumerUsername: {
        type: String,
        required: true,
    },
    providerUsername: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    dateClaims: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },
    answer: {
        type: String,
        required: false,
    },
    dateAnswer: {
        type: Date,
        default: Date.now(),
    },
})

const Claims = model('Claims', consumerSchema)

module.exports = Claims
