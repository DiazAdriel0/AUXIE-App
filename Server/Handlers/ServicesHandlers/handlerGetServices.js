const getServices = require('../../Controllers/ServicesControllers/getServices')

const handlerGetServices = async (req, res) => {
    try {
        const allServices = await getServices()
        if (allServices.message === 'No hay servicios') {
            throw new Error('No se encontraron los servicios')
        }
        res.status(200).json(allServices)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerGetServices