const getAllProviders = require('../../Controllers/ProvidersControllers/getAllProviders')

const getProviders = async (req, res) => {
    try {
        const providers = await getAllProviders()

        if (!providers) {
            return res
                .status(400)
                .json({ error: 'No se pudieron recuperar los Providers' })
        }

        res.status(200).json(providers)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getProviders
