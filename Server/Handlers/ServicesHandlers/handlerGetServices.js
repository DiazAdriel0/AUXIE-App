const getAllServices = require('../../Controllers/ServicesControllers/getAllServices')

const handlerServices = async (req, res) => {
    try {
        /* const { name, category } = req.query
        if (!name && !category) { */
        const allServices = await getAllServices()
        if (allServices.message === 'No hay servicios') {
            throw new Error('No se encontraron los servicios')
        }
        res.status(200).json(allServices)
        


        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerServices
