const findProviderById = require('./../../Controllers/ProvidersControllers/findProviderById')

const getProviderById = async (req, res) => {
    try {
        const { id } = req.params

        const providerFound = await findProviderById(id)

        if (providerFound.message === 'id inexistente')
            throw new Error(
                'No se encontró ningún auxie con el ID especificado'
            )

        res.status(200).json(providerFound)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getProviderById
