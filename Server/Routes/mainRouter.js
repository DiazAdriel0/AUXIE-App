const { Router } = require('express')
const usersRouter = require('./Routers/usersRouter')
const servicesRouter = require('./Routers/servicesRouter')

const mainRouter = Router()

mainRouter.use('/users', usersRouter)
mainRouter.use('/services', servicesRouter)

module.exports = mainRouter
