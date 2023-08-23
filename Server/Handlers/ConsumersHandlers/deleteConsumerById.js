const deleteConsumer = require('../../Controllers/ConsumersControllers/deleteConsumer')

const deleteConsumerById = async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await deleteConsumer(id)

        if (!deleted) return res.status(400).json({ error: 'Id invalido' })

        res.status(200).send('Usuario eliminado con éxito')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = deleteConsumerById
