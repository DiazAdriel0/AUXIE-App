const putService = require('../../Controllers/ServicesControllers/putService')

const handlerPutService = async (req, res) => {
    try {
        const { name, category } = req.body
        const { id } = req.params

        if (!name && !category) {
            throw new Error('Faltan datos')
        } else {
            const updatedService = await putService(id, name, category)

            if (updatedService.message === 'El servicio no existe') {
                throw new Error('No existe un servicio con este nombre y/o categoría')
            } else {
                res.status(200).json(updatedService)
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerPutService
