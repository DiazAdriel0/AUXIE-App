const Provider = require('./../../Models/provider')

const modifyFirstLogin = async (id) => {
    try {
        const providerFound = await Provider.findById(id)

        providerFound.firstLogin = false

        providerFound.save()

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

module.exports = modifyFirstLogin
