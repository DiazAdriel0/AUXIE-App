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
    name: {
        type: String,
        required: true,
    },
    providers: {
        type: [String],
    },
    numberOfProviders: {
        type: Number,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
})
serviceSchema.pre('save', function (next) {
    this.numberOfProviders = this.providers.length
    if (this.isNew) {
        Service.findOne(
            {},
            {},
            { sort: { counter: -1 } },
            (err, lastService) => {
                if (err) {
                    return next(err)
                }
                if (lastService) {
                    this.counter = lastService.counter + 1
                }
                next()
            }
        )
    } else {
        next()
    }
})

const Service = model('Service', serviceSchema)

module.exports = Service
