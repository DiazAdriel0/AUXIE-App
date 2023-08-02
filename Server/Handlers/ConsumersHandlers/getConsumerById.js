const getConsumerId = require ('../../Controllers/ConsumersControllers/getConsumerId')

const getConsumerById = async (req, res)=>{
    const {id} = req.params
    try {
        const consumer = await getConsumerId(id)

        if (!consumer) return res.status(400).json({ error: 'Id invalido' })

        res.status(200)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getConsumerById