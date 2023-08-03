const postService = require('../../Controllers/ServicesControllers/postService')

const handlerPostService = async (req, res) => {
    try {
        const { name, category } = req.body

        if (!name || !category) {
            throw new Error('Faltan datos')
        } else {
            const newService = await postService(name, category)
            if (newService.message === 'Servicio repetido') {
                throw new Error(
                    'Ya existe un servicio con este nombre y categoría'
                )
            } else {
                res.status(200).json(newService)
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerPostService
