const { Router } = require('express')
const consumersRouter = require('./Routers/consumersRouter')
const servicesRouter = require('./Routers/servicesRouter')
const providersRouter = require('./Routers/providersRouter')
const claimsRouter = require('./Routers/claimsRouter')

const mainRouter = Router()

mainRouter.use('/consumers', consumersRouter)
mainRouter.use('/services', servicesRouter)
mainRouter.use('/providers', providersRouter)
mainRouter.use('/claims', claimsRouter)

module.exports = mainRouter
