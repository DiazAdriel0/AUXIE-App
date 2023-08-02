const { Router } = require('express')
const postConsumer = require('../../Handlers/ConsumersHandlers/postConsumer')
const deleteConsumerById = require('../../Handlers/ConsumersHandlers/deleteConsumerById')
const loginConsumer = require('../../Handlers/ConsumersHandlers/loginConsumer')
const getConsumerById = require('../../Handlers/ConsumersHandlers/getConsumerById')
const getAllConsumers = require('../../Handlers/ConsumersHandlers/getAllConsumers')

const consumersRouter = Router()

consumersRouter.get('/', getAllConsumers)
consumersRouter.get('/login', loginConsumer)
consumersRouter.get('/:id', getConsumerById)

consumersRouter.post('/', postConsumer)

consumersRouter.delete('/:id', deleteConsumerById)

module.exports = consumersRouter
