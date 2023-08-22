const modifyJobStatus = require('../../Controllers/ProvidersControllers/modifyJobStatus')

const updateJobStatus = async(req, res)=>{

    try {
        const update = await modifyJobStatus(req)

        if(!update) throw new Error('No se pudo actualizar estado')

        res.status(200).json(update)
    } catch (error) {
        console.error(error.message)
        res.status(400).json({error:error.message})
    }
    


}

module.exports = updateJobStatus