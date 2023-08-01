const { Router } = require('express')
const postProvider = require('./../../Handlers/UsersHandlers/postPorovider')

const providersRouter = Router()

// providersRouter.get('/', getProviders)
providersRouter.post('/', postProvider)

module.exports = providersRouter
