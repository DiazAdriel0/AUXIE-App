const modifyConsumer = require('../../Controllers/ConsumersControllers/modifyConsumer')

const updateConsumer = async (req, res)=>{
    try {
        const consumer = await modifyConsumer(req)

        if(consumer.message=== 'IdIncorrecto')res.status(400).json('No se pudo actualizar')
        if(consumer.modifiedCount===0) throw new Error('No se pudo actualizar')
        res.status(200).json('usuario actualizado')
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
}

module.exports = updateConsumer