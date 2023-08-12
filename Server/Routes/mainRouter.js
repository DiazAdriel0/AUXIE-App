const { Router } = require('express')
const consumersRouter = require('./Routers/consumersRouter')
const servicesRouter = require('./Routers/servicesRouter')
const providersRouter = require('./Routers/providersRouter')
const claimsRouter = require('./Routers/claimsRouter')
const mercadoPagoRouter = require('./Routers/mercadoPagoRouter')

const mainRouter = Router()

mainRouter.use('/consumers', consumersRouter)
mainRouter.use('/services', servicesRouter)
mainRouter.use('/providers', providersRouter)
mainRouter.use('/claims', claimsRouter)
mainRouter.use('/buy', mercadoPagoRouter )

module.exports = mainRouter
