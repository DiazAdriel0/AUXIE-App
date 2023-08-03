const Consumer = require('../../Models/consumer')

const modifyConsumer = async (req)=>{
    const {firstName, lastName, address, image, username, id} = req.body
    try {
        const recibedProperties ={
            id,
            firstName,
            lastName,
            address,
            username,
            usernameLower:username?.toLowerCase(),
            image,
        }
    
        const filledProperties = Object.entries(recibedProperties)
            // eslint-disable-next-line no-unused-vars
            .filter(([_, value]) => {
                return (
                    (typeof value === 'string' && value.trim() !== '') ||
                    (Array.isArray(value) && value.length > 0)
                )
            })
    
        const filledObject = Object.fromEntries(filledProperties)
        const consumer = await Consumer.updateOne({_id:id}, filledObject)

        if(consumer.modifiedCount===0) throw new Error('No se pudo actualizar')

        return consumer
        
    } catch (error) {
        return false
    }
}

module.exports = modifyConsumer