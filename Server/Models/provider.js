const { Schema, model } = require('mongoose')

const providerSchema = new Schema({
    isActive: {
        type: Boolean,
        default: true,
    },

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true, min: 18 },
    gender: { type: String },
    address: { type: String },
    image: { public_id: String, secure_url: String },
    bio: { type: String },

    email: { type: String, required: true },
    username: { type: String, required: true },
    usernameLower: { type: String },
    password: { type: String, required: true },
    registerDate: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },

    services: { type: Array },
    jobs: { type: Array },
    ratings: { type: Array },
    averageRating: { type: Number, min: 0 },
    reviews: { type: Array },
    googleId: {
        type: String,
        default: '',
    },
    gallery: { type: Array },

    userUid: {
        type: String,
        default: '',
    },
    inbox: {
        type: Array,
    },
    claims: {
        type: Array,
    },
})

providerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    },
})

const Provider = model('Provider', providerSchema)

module.exports = Provider
