const Consumer = require('../../Models/consumer')

const getConsumerId = async (userUid) => {
    try {
        const consumer = await Consumer.findOne({userUid:userUid}, {
            password: 0,
            usernameLower: 0,
        })
        return consumer ? consumer : false
    } catch (error) {
        return false
    }
}
module.exports = getConsumerId
