const postService = require('../../Controllers/ServicesControllers/postService')
const fs = require('fs-extra')
const { uploadServiceImage } = require('./../../Utils/cloudinary')

const handlerPostService = async (req, res) => {
    try {
        const { category, name } = req.body
        let image

        if (!name || !category) {
            throw new Error('Faltan datos')
        }
        if (req.files?.image) {
            const result = await uploadServiceImage(
                req.files.image.tempFilePath
            )
            image = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            }
            await fs.unlink(req.files.image.tempFilePath)
        } else {
            image = {
                public_id: 'AUXIE App/Services Images/nisrdx8zhooa79xgvlpf',
                secure_url:
                    'https://res.cloudinary.com/dvj387b1u/image/upload/v1691965757/AUXIE%20App/Services%20Images/nisrdx8zhooa79xgvlpf.png',
            }
        }

        const newService = await postService(category, name, image)
        if (newService.message === 'Servicio repetido') {
            throw new Error(
                'Ya existe un servicio con este nombre y/o categoría'
            )
        } else {
            res.status(200).json(newService)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerPostService
