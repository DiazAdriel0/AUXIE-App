const { Router } = require('express')
const usersRouter = require('./Routers/usersRouter')
const servicesRouter = require('./Routers/servicesRouter')
const providersRouter = require('./Routers/providersRouter')

const mainRouter = Router()

mainRouter.use('/users', usersRouter)
mainRouter.use('/services', servicesRouter)
mainRouter.use('/providers', providersRouter)

module.exports = mainRouter
