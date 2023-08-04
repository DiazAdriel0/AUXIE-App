const deleteService = require('../../Controllers/ServicesControllers/deleteService')

const handlerDeleteService = async (req, res) => {
    try {
        const { id } = req.params

        const deletedService = await deleteService(id)
        if (deletedService.message === 'No se encontró el servicio') {
            throw new Error('No existe un servicio con este nombre y/o categoría')
        }else{
            res.status(200).json({ message: 'Servicio eliminado correctamente'})
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerDeleteService
