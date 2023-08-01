const Provider = require('./../../Models/provider')

const createProvider = async (newProvider) => {
    try {
        const isRepeat = await Provider.findOne({
            username: newProvider.username,
        })

        if (isRepeat)
            throw new Error(
                `The username ${newProvider.username} already exitsts`
            )

        await Provider.create(newProvider)

        return true
    } catch (error) {
        console.error(error)
        return error.message
    }
}

module.exports = createProvider
