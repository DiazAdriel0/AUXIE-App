const { Router } = require('express')
const postProvider = require('./../../Handlers/ProvidersHandlers/postPorovider')

const providersRouter = Router()

// providersRouter.get('/', getProviders)
providersRouter.post('/', postProvider)

module.exports = providersRouter
