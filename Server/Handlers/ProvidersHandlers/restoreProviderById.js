const restoreProvider = require('../../Controllers/ProvidersControllers/restoreProvider')

const restoreProviderById = async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await restoreProvider(id)

        if (!deleted) return res.status(400).json({ error: 'Id invalido' })

        res.status(200).send('Usuario restaurado con éxito')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = restoreProviderById
