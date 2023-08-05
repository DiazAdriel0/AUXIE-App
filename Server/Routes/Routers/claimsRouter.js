const { Router } = require('express')
const handlerPostClaim = require('../../Handlers/ClaimsHandlers/handlerPostClaim')
const handlerGetClaim = require('../../Handlers/ClaimsHandlers/handlerGetClaim')
const handlerPutClaim = require('../../Handlers/ClaimsHandlers/handlerPutClaim')

const claimsRouter = Router()

claimsRouter.get('/', handlerGetClaim)

claimsRouter.post('/', handlerPostClaim)

claimsRouter.post('/:id', handlerPutClaim)

module.exports = claimsRouter
