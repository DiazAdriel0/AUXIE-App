const { Schema, model } = require('mongoose')

const consumerSchema = new Schema({

})

const Claims = model('Claims', consumerSchema)

module.exports = Claims
