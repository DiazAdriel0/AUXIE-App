const modifyProviderServices = require('./../../Controllers/ProvidersControllers/modifyProviderServices')

const updateOfferedServices = async (req, res) => {
    const { services, id } = req.body
    try {
        const updatedProvider = await modifyProviderServices(services, id)

        if (updatedProvider.message === 'sin cambios')
            throw new Error('No se realizaron cambios en los servicios')

        if (updatedProvider.message === 'servicio inexistente')
            throw new Error('No se encontró el servicio solicitado')

        res.status(200).json('Servicios vinculados')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateOfferedServices
