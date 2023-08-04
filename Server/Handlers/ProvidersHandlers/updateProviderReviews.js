const modifyProviderReviews = require('./../../Controllers/ProvidersControllers/modifyProviderReviews')

const updateProviderReviews = async (req, res) => {
    try {
        const updateProvider = await modifyProviderReviews(req.body)

        if (!updateProvider) throw new Error('error')

        if (updateProvider.message === 'provider inexistente')
            throw new Error('No existe un provider con ese id')

        if (updateProvider.message === 'consumer inexistente')
            throw new Error('No existe un consumer con ese id')

        if (updateProvider.message === 'service inexistente')
            throw new Error('No existe un service con ese id')

        res.status(200).json('Usuario actualizado con éxito')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateProviderReviews
