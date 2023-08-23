const restoreConsumer = require('../../Controllers/ConsumersControllers/restoreConsumer')

const restoreConsumerById = async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await restoreConsumer(id)

        if (!deleted) return res.status(400).json({ error: 'Id invalido' })

        res.status(200).send('Usuario restaurado con éxito')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports = restoreConsumerById
