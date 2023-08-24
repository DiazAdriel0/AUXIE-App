const Provider = require('../../Models/provider')

const findProviderById = async (uid) => {
    try {
        const foundProvider = await Provider.findOne({userUid:uid}, {
            password: 0,
            usernameLower: 0,
        })
        if (!foundProvider) {
            const foundProvider2 = await Provider.findOne({googleId:uid}, {
                password: 0,
                usernameLower: 0,
            })
            return foundProvider2
        } else {
            return foundProvider
        }

       
    } catch (error) {
        error.message = 'uid inexistente'
        return error
    }
}

module.exports = findProviderById
