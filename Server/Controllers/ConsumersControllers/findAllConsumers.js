const Consumer = require('../../Models/consumer')

const findAllConsumers = async () => {
    try {
        const providers = await Consumer.find(
            {},
            { password: 0, usernameLower: 0 }
        )

        return providers
    } catch (error) {
        return new Error('sin usuarios')
    }
}

module.exports = findAllConsumers
