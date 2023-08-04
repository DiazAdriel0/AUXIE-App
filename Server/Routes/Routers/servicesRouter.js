const { Router } = require('express')
const handlerGetServices = require('../../Handlers/ServicesHandlers/handlerGetServices')
const handlerPostService = require('../../Handlers/ServicesHandlers/handlerPostService')
//const handlerPutServices = require('../../Handlers/ServicesHandlers/')
const handlerDeleteService = require('../../Handlers/ServicesHandlers/handlerDeleteService')

const servicesRouter = Router()

servicesRouter.get('/', handlerGetServices)

servicesRouter.post('/', handlerPostService)

//servicesRouter.put('/', handlerPutService)

servicesRouter.delete('/:id', handlerDeleteService)

module.exports = servicesRouter
