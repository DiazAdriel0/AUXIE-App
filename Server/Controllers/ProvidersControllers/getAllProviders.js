const Provider = require('../../Models/provider')

const getAllProviders = async()=>{
    try {
        const providers = await Provider.find({})
        return providers
        
    } catch (error) {
        return false
    }
}

module.exports = getAllProviders