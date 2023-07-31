const { Router } = require('express')
const getProviders = require('../../Handlers/UsersHandlers/getProviders')

const usersRouter = Router()

usersRouter.get('/providers', getProviders)
// usersRouter.get('/consumer', getConsumers)
//comentario
module.exports = usersRouter
