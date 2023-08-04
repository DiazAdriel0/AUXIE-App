const { Router } = require('express')
const handlerPostClaim = require('../../Handlers/ClaimsHandlers/handlerPostClaim')
const handlerGetClaim = require('../../Handlers/ClaimsHandlers/handlerGetClaim')

const claimsRouter = Router()

claimsRouter.get('/', handlerGetClaim)

claimsRouter.post('/', handlerPostClaim)

module.exports = claimsRouter
