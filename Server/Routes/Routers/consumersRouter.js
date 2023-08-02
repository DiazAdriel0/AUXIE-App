const { Router } = require('express')
const postConsumer = require('../../Handlers/ConsumersHandlers/postConsumer')
const deleteConsumerById = require('../../Handlers/ConsumersHandlers/deleteConsumerById')
const loginConsumer = require('../../Handlers/ConsumersHandlers/loginConsumer')
const getConsumerById = require('../../Handlers/ConsumersHandlers/getConsumerById')

/* const getConsumers = require('../../Handlers/ConsumersHandlers/getConsumers') */

const consumersRouter = Router()

/* consumersRouter.get('/', getConsumers) */
consumersRouter.get('/:id', getConsumerById)
consumersRouter.get('/login', loginConsumer)

consumersRouter.post('/', postConsumer)

consumersRouter.delete('/:id', deleteConsumerById )
module.exports = consumersRouter
