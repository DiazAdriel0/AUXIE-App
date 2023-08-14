const Consumer = require('../../Models/consumer')

const getConsumerById = async (id) => {
    try {
        const consumerFound = await Consumer.findById(id, {
            password: 0,
            usernameLower: 0,
        })
        return consumerFound ? consumerFound : false
    } catch (error) {
        return false
    }
}
module.exports = getConsumerById
