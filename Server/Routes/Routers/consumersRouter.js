const { Router } = require('express')
const postConsumer = require('../../Handlers/ConsumersHandlers/postConsumer')
const deleteConsumerById = require('../../Handlers/ConsumersHandlers/deleteConsumerById')
const loginConsumer = require('../../Handlers/ConsumersHandlers/loginConsumer')
/* const getConsumers = require('../../Handlers/ConsumersHandlers/getConsumers') */

const consumersRouter = Router()

/* consumersRouter.get('/', getConsumers) */
consumersRouter.post('/', postConsumer)
consumersRouter.get('/login', loginConsumer)
consumersRouter.delete('/delete/:id', deleteConsumerById )
module.exports = consumersRouter
