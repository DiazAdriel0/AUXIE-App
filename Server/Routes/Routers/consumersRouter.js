const { Router } = require('express')
const postConsumer = require('../../Handlers/ConsumersHandlers/postConsumer')
const deleteConsumerById = require('../../Handlers/ConsumersHandlers/deleteConsumerById')
const loginConsumer = require('../../Handlers/ConsumersHandlers/loginConsumer')
const getConsumerById = require('../../Handlers/ConsumersHandlers/getConsumerById')
const getAllConsumers = require('../../Handlers/ConsumersHandlers/getAllConsumers')
const updateConsumer = require('../../Handlers/ConsumersHandlers/updateConsumer')
const deleteFavoriteProv = require('../../Handlers/ConsumersHandlers/deleteFavoriteProv')
const favoriteProviders = require('../../Handlers/ConsumersHandlers/favoriteProviders')
const revokeTokens = require('../../Handlers/ConsumersHandlers/revokeTokens')
const welcomeEmail = require('../../Handlers/ConsumersHandlers/welcomeEmail')
const consumersRouter = Router()

consumersRouter.get('/', getAllConsumers)
consumersRouter.get('/:id', getConsumerById)

consumersRouter.put('/profile', updateConsumer)
consumersRouter.put('/fav', favoriteProviders)
consumersRouter.post('/login', loginConsumer)
consumersRouter.post('/', postConsumer)
consumersRouter.post('/logout', revokeTokens)
consumersRouter.post('/welcomeEmail', welcomeEmail)

consumersRouter.delete('/:id', deleteConsumerById)
consumersRouter.delete('/delete/fav', deleteFavoriteProv)

module.exports = consumersRouter
