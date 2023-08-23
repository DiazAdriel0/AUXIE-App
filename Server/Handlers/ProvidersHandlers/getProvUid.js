const findProvUid= require('../../Controllers/ProvidersControllers/findProvUid')

const getProviderById = async (req, res) => {
    try {
        const { uid } = req.params

        const providerFound = await findProvUid(uid)

        if (providerFound.message === 'uid inexistente')
            throw new Error(
                'No se encontró ningún auxie con el UID especificado'
            )

        res.status(200).json(providerFound)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getProviderById
