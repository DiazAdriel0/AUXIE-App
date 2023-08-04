const { Schema, model } = require('mongoose')

const consumerSchema = new Schema({
    consumerUsername: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    providerUsername: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    pending: {
        type: Boolean,
        default: true,
    },
})

const Claims = model('Claims', consumerSchema)

module.exports = Claims
