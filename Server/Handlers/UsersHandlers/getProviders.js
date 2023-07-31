const getAllProviders = require('../../Controllers/UserControllers/getAllProviders')

const getProviders = async (req, res)=>{
    try {
        const providers = await getAllProviders()
        res.status(200).json(providers)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = getProviders