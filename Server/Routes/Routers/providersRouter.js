const { Router } = require('express')
const postProvider = require('./../../Handlers/ProvidersHandlers/postPorovider')
const getProviders = require('../../Handlers/ProvidersHandlers/getProviders')
const deleteProviderById = require('../../Handlers/ProvidersHandlers/deleteProviderById')
const loginProvider = require('../../Handlers/ProvidersHandlers/loginProvider')
const getProviderById = require('./../../Handlers/ProvidersHandlers/getProviderById')

const providersRouter = Router()

providersRouter.get('/', getProviders)
providersRouter.get('/login', loginProvider)
providersRouter.get('/:id', getProviderById)

providersRouter.post('/', postProvider)

providersRouter.delete('/:id', deleteProviderById)

module.exports = providersRouter
