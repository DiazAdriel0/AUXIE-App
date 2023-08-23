const mercadopago = require('mercadopago')
const Provider = require('../../Models/provider')
mercadopago.configure({
    access_token:
        'TEST-3622230075303359-080922-2ff3eda5bfb71242d66fb48ab3e9d963-487693515',
})

const handlerMercadoPago = async (req, res) => {
    const {provider} = req.body
    const url = process.env.BACK_URL || 'http://localhost:5173'
    let uid
    try{
        const prov = await Provider.findById({_id:provider})

        uid = prov.userUid || prov.googleId
    }catch(e){
        console.error(e.message)
    }
   
    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            },
        ],
        back_urls: {
            success: `${url}/paymentSucceeded/${uid}`,
            failure: `${url}/paymentFailed`,
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
            console.error(error)
        })
}

module.exports = handlerMercadoPago
