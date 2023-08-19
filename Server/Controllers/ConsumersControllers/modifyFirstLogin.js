const Consumer = require('./../../Models/consumer')

const modifyFirstLogin = async (id) => {
    try {
        const consumerFound = await Consumer.findById(id)

        consumerFound.firstLogin = false

        consumerFound.save()

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

module.exports = modifyFirstLogin
