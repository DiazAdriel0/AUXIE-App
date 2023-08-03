const modifyConsumer = require('../../Controllers/ConsumersControllers/modifyConsumer')

const updateConsumer = async (req, res)=>{
    try {
        const consumer = await modifyConsumer(req)

        if(!consumer)return res.status(400).json('No se pudo actualizar')
        
        return res.status(200).json('usuario actualizado')
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}

module.exports = updateConsumer