const Provider = require('./../../Models/provider')

const createProvider = async (newProvider) => {
    const isRepeat = await Provider.findOne({ username: newProvider.username })

    if (isRepeat)
        throw new Error(`The username ${newProvider.username} already exitsts`)

    const createdProvider = await Provider.create(newProvider)

    return createdProvider
}

module.exports = createProvider
