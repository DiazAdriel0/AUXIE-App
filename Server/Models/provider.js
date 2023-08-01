const { Schema, model } = require('mongoose')

const providerSchema = new Schema({
    isActive: {
        type: Boolean,
        default: true,
    },

    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    address: { type: String, min: 18 },

    email: { type: String },
    username: { type: String },
    usernameLower: { type: String },
    password: { type: String },
    registerDate: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },

    services: { type: Array },
    pendingServices: { type: Array },
    completedWorks: { type: Array },
    ratings: { type: Array },
    averageRating: { type: Number, min: 0 },
    reviews: { type: Array },
})

const Provider = model('Provider', providerSchema)

module.exports = Provider
