const Provider = require('../../Models/provider')

const getAllProviders = async()=>{
    const providers = await Provider.find({})

    return providers
}

module.exports = getAllProviders