const modifyJobPrice = require('../../Controllers/ProvidersControllers/modifyJobPrice')

const updateJobPrice = async (req, res) => {
    try {
        const update = await modifyJobPrice(req)

        if (!update) throw new Error('No se pudo actualizar el precio')

        res.status(200).json(update)
    } catch (error) {
        console.error(error.message)
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateJobPrice
