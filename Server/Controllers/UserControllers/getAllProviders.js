const Provider = require('../../Models/provider')

const getAllProviders = async()=>{
    try {
        const providers = await Provider.find({})

        return providers
    } catch (error) {
        throw new Error('No se encontraron providers')
    }
}

module.exports = getAllProviders