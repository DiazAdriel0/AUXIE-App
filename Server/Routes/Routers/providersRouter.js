const { Router } = require('express')
const postProvider = require('./../../Handlers/ProvidersHandlers/postPorovider')
const getProviders = require('../../Handlers/ProvidersHandlers/getProviders')
const deleteProviderById = require('../../Handlers/ProvidersHandlers/deleteProviderById')
const loginProvider = require('../../Handlers/ProvidersHandlers/loginProvider')
const getProviderById = require('./../../Handlers/ProvidersHandlers/getProviderById')
const updateProvider = require('./../../Handlers/ProvidersHandlers/updateProvider')
const updateOfferedServices = require('./../../Handlers/ProvidersHandlers/updateOfferedServices')
const updateProviderReviews = require('./../../Handlers/ProvidersHandlers/updateProviderReviews')
const putPendingService = require('./../../Handlers/ProvidersHandlers/putPendingService')

const providersRouter = Router()

providersRouter.get('/', getProviders)
providersRouter.get('/:id', getProviderById)

providersRouter.put('/profile', updateProvider)
providersRouter.put('/services', updateOfferedServices)
providersRouter.put('/reviews', updateProviderReviews)
providersRouter.put('/pendingServices/:id', putPendingService)

providersRouter.post('/', postProvider)
providersRouter.post('/login', loginProvider)

providersRouter.delete('/:id', deleteProviderById)

module.exports = providersRouter
