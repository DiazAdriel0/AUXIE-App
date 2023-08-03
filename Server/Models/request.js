const { Schema, model } = require('mongoose')

const requestSchema = new Schema({
    consumerId: {
        type: String,
        required: true,
    },
    providerId: {
        type: String,
        required: true,
    },
    serviceName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'completed', 'declined'],
    },
    description: String,
})

const Request = model('Request', requestSchema)

module.exports = Request
