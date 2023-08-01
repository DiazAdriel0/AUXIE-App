const Provider = require('../../Models/provider')

const createProvider = async (newProvider) => {
    try {
        const isRepeatEmail = await Provider.findOne({
            email: newProvider.email,
        })

        if (isRepeatEmail) throw new Error('email repetido')

        const isRepeatUsername = await Provider.findOne({
            usernameLower: newProvider.usernameLower,
        })

        if (isRepeatUsername) throw new Error('usuario repetido')

        const createdProvider = await Provider.create(newProvider)

        return createdProvider
    } catch (error) {
        console.error(error)
        return error
    }
}

module.exports = createProvider
