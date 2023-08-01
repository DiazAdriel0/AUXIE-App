const Provider = require('../../Models/provider')

const createProvider = async (newProvider) => {
    try {
        const isRepeat = await Provider.findOne({
            username: newProvider.username,
        })

        if (isRepeat)
            throw new Error(
                `El nombre de usuario: ${newProvider.username} ya existe`
            )

        await Provider.create(newProvider)

        return true
    } catch (error) {
        console.error(error)
        return error.message
    }
}

module.exports = createProvider
