const Consumer = require('../../Models/consumer')

const getConsumerId = async (id)=>{
    try {
        const consumer = await Consumer.findById(id, {password:0, usernameLower:0})
        return consumer ? consumer : false

    } catch (error) {
        return false
    }
}
module.exports = getConsumerId