const { Router } = require('express')
const handlerGetServices = require('../../Handlers/ServicesHandlers/handlerGetServices')
const handlerPostService = require('../../Handlers/ServicesHandlers/handlerPostService')
const handlerPutService = require('../../Handlers/ServicesHandlers/handlerPutService')

const servicesRouter = Router()

servicesRouter.get('/', handlerGetServices)

servicesRouter.post('/', handlerPostService)

servicesRouter.put('/:id', handlerPutService)

module.exports = servicesRouter
