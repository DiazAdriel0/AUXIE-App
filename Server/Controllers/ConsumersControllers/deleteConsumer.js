const Consumer = require('../../Models/consumer')

const deleteConsumer = async (id) => {
    try {
        const consumerUser = await Consumer.findById(id)

        if (!consumerUser) return false

        consumerUser.isActive = false

        consumerUser.save()

        return true
    } catch (error) {
        return false
    }
}

module.exports = deleteConsumer
