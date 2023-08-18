const { Schema, model } = require('mongoose')

const requestSchema = new Schema({
    isActive: {
        type: Boolean,
        default: true,
    },
    clientId: {
        type: String,
        required: true,
    },
    providerId: {
        type: String,
        required: true,
    },
    providerName: {
        type: String,
        required: true,
    },
    requestDate: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },
    jobDate: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'done', 'approved', 'declined', 'cancelled', 'proposal', 'cancelledByAuxie'],
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
})

const Request = model('Request', requestSchema)

module.exports = Request
