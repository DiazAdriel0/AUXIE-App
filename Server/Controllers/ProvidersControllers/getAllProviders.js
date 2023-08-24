const Provider = require('../../Models/provider')

const getAllProviders = async () => {
    try {
        const providers = await Provider.find({isActive: true},
            { password: 0, usernameLower: 0 }
        )
        return providers
    } catch (error) {
        return false
    }
}

module.exports = getAllProviders
