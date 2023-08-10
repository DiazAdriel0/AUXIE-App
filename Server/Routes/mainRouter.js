const { Router } = require('express')
const consumersRouter = require('./Routers/consumersRouter')
const servicesRouter = require('./Routers/servicesRouter')
const providersRouter = require('./Routers/providersRouter')
const claimsRouter = require('./Routers/claimsRouter')

const mainRouter = Router()

mainRouter.use('/consumers', consumersRouter)
mainRouter.use('/services', servicesRouter)
mainRouter.use('/providers', providersRouter)
mainRouter.use('/claims', claimsRouter)

const mercadopago = require('mercadopago')
mercadopago.configure({
    access_token:
        'TEST-3622230075303359-080922-2ff3eda5bfb71242d66fb48ab3e9d963-487693515',
})

mainRouter.post('/create_preference', (req, res) => {
    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            },
        ],
        back_urls: {
            success: 'http://localhost:5173',
            failure: 'http://localhost:5173',
            pending: '',
        },
        auto_return: 'approved',
    }

    mercadopago.preferences
        .create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id,
            })
        })
        .catch(function (error) {
            console.log(error)
        })
})

module.exports = mainRouter
