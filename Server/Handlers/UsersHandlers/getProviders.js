const Provider = require('../../Models/provider')

const getProviders = async (req, res)=>{
    try {
        const providers = await Provider.find({})
        res.status(200).json(providers)
    } catch (error) {
        res.status(500).send({error: error.message})
    }

   

}

module.exports = getProviders