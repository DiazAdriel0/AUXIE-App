const Provider = require('./../../Models/provider')

const findProviderById = async (id) => {
    try {
        const foundProvider = await Provider.findById(id)

        const providerWithoutUnnecesary = foundProvider.toObject()
        delete providerWithoutUnnecesary.password
        delete providerWithoutUnnecesary.usernameLower

        return providerWithoutUnnecesary
    } catch (error) {
        error.message = 'id inexistente'
        return error
    }
}

module.exports = findProviderById
