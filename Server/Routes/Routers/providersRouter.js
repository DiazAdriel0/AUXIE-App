const { Router } = require('express')
const postProvider = require('./../../Handlers/ProvidersHandlers/postPorovider')
const getProviders = require('../../Handlers/ProvidersHandlers/getProviders')
const deleteProviderById = require('../../Handlers/ProvidersHandlers/deleteProviderById')
const loginProvider = require('../../Handlers/ProvidersHandlers/loginProvider')

const providersRouter = Router()

providersRouter.get('/', getProviders)
providersRouter.post('/', postProvider)
providersRouter.get('/login', loginProvider)
providersRouter.delete('/:id', deleteProviderById )

module.exports = providersRouter
