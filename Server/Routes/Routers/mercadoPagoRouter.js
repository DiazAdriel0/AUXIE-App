const { Router } = require('express')

const handlerMercadoPago = require('../../Handlers/MercadoPagoHandlers/handlerMercadoPago')

const mercadoPagoRouter = Router()

mercadoPagoRouter.post('/', handlerMercadoPago)

module.exports = mercadoPagoRouter