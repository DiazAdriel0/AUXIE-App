const addJob = require('./../../Controllers/ProvidersControllers/addJob')

const updateJobs = async (req, res) => {
    const { id } = req.params
    try {
        const addService = await addJob(req.body, id)

        if (addService.message)
            throw new Error('No se pudo agregar el servicio')

        res.status(200).json('Servicio solicitado con éxito')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateJobs
