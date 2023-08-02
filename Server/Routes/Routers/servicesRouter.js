const { Router } = require('express')
const handlerGetServices = require('../../Handlers/ServicesHandlers/handlerGetServices')
const handlerPostService = require('../../Handlers/ServicesHandlers/handlerPostService')
//const handlerPutServices = require('../../Handlers/ServicesHandlers/');

const servicesRouter = Router()

servicesRouter.get('/', handlerGetServices)

servicesRouter.post('/', handlerPostService)

module.exports = servicesRouter
