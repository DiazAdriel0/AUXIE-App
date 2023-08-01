const deleteProvider = require('../../Controllers/ProvidersControllers/deleteProvider')

const deleteProviderById = async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await deleteProvider(id)

        if (!deleted) return res.status(400).json({ error: 'Id invalido' })

        res.status(200)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = deleteProviderById
