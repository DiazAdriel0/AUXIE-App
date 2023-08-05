const postService = require('../../Controllers/ServicesControllers/postService')

const handlerPostService = async (req, res) => {
    try {
        const { category, name, image } = req.body

        if (!name || !category || !image) {
            throw new Error('Faltan datos')
        } else {
            const newService = await postService(category, name, image)
            if (newService.message === 'Servicio repetido') {
                throw new Error(
                    'Ya existe un servicio con este nombre y/o categoría'
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
