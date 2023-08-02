const findAllConsumers = require('./../../Controllers/ConsumersControllers/findAllConsumers')

const getAllConsumers = async (req, res) => {
    try {
        const providers = await findAllConsumers()

        if (providers.message === 'sin usuarios')
            throw new Error('No se encontraron consumers')

        res.status(200).json(providers)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = getAllConsumers
