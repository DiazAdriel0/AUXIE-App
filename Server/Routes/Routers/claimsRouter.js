const { Router } = require('express')
const handlerPostClaim = require('../../Handlers/ClaimsHandlers/handlerPostClaim')
const handlerGetClaim = require('../../Handlers/ClaimsHandlers/handlerGetClaim')
const handlerPutClaim = require('../../Handlers/ClaimsHandlers/handlerPutClaim')
const handlerGetClaimId = require('../../Handlers/ClaimsHandlers/handlerGetClaimId')

const claimsRouter = Router()

claimsRouter.get('/', handlerGetClaim)

claimsRouter.get('/:id', handlerGetClaimId)

claimsRouter.post('/', handlerPostClaim)

claimsRouter.put('/:id', handlerPutClaim)

module.exports = claimsRouter
