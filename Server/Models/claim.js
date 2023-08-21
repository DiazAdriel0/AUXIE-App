const { Schema, model } = require('mongoose')

const consumerSchema = new Schema({
    pending: {
        type: Boolean,
        default: true,
    },
    email: {
        type: String,
        required: true,
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
        public_id: String, 
        secure_url: String,
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
