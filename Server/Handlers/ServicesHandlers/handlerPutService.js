const putService = require('../../Controllers/ServicesControllers/putService')
const { uploadServiceImage } = require('./../../Utils/cloudinary')

const handlerPutService = async (req, res) => {
    try {
        const { category, name } = req.body
        const { id } = req.params
        let image

        if (!name && !category) {
            throw new Error('Faltan datos')
        } else if (req.files?.image) {
            const result = await uploadServiceImage(
                req.files.image.tempFilePath
            )
            image = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            }
        } else {
            const updatedService = await putService(id, category, name, image)

            if (updatedService.message === 'El servicio no existe') {
                throw new Error(
                    'No existe un servicio con este nombre y/o categoría'
                )
            } else {
                res.status(200).json(updatedService)
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerPutService
