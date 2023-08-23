const Consumer = require('../../Models/consumer')

const restoreConsumer = async (id) => {
    try {
        const consumerUser = await Consumer.findById(id)

        if (!consumerUser) return false

        consumerUser.isActive = true

        await consumerUser.save()

        return true
    } catch (error) {
        return false
    }
}

module.exports = restoreConsumer
