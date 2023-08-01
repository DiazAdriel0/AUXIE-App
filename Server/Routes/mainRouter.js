const { Router } = require('express')
const consumersRouter = require('./Routers/consumersRouter')
const servicesRouter = require('./Routers/servicesRouter')
const providersRouter = require('./Routers/providersRouter')

const mainRouter = Router()

mainRouter.use('/users', consumersRouter)
mainRouter.use('/services', servicesRouter)
mainRouter.use('/providers', providersRouter)

module.exports = mainRouter
