const Provider = require('./../../Models/provider')

const findProviderById = async (id) => {
    try {
        const foundProvider = await Provider.findById(id, {
            password: 0,
            usernameLower: 0,
        })

        return foundProvider
    } catch (error) {
        error.message = 'id inexistente'
        return error
    }
}

module.exports = findProviderById
