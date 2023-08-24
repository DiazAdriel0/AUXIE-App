const { Schema, model } = require('mongoose')

const claimSchema = new Schema({
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
    isConsumer:{
        type: Boolean,
    }
})

claimSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    },
})

const Claims = model('Claims', claimSchema)

module.exports = Claims
