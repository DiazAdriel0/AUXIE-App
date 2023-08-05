const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({
    counter: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        required: true,
    },
    categoryLower: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nameLower: {
        type: String,
        required: true,
    },
    providers: {
        type: [String],
    },
    numberOfProviders: {
        type: Number,
    },
    image: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
})
serviceSchema.pre('save', function (next) {
    this.numberOfProviders = this.providers.length
    next()
})

const Service = model('Service', serviceSchema)

module.exports = Service
