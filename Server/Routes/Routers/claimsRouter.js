const { Router } = require('express')
const handlerPostClaim = require('../../Handlers/ClaimsHandlers/handlersPostClaim')

const claimsRouter = Router()

claimsRouter.post('/', handlerPostClaim)

module.exports = claimsRouter
