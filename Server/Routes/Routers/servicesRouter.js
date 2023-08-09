const { Router } = require('express')
const handlerGetServices = require('../../Handlers/ServicesHandlers/handlerGetServices')
const handlerPostService = require('../../Handlers/ServicesHandlers/handlerPostService')
const handlerDeleteService = require('../../Handlers/ServicesHandlers/handlerDeleteService')
const handlerPutService = require('../../Handlers/ServicesHandlers/handlerPutService')

const servicesRouter = Router()

servicesRouter.get('/', handlerGetServices)

servicesRouter.post('/', handlerPostService)

const Service = require('./../../Models/service')
const { uploadServiceImage } = require('./../../Utils/cloudinary')

servicesRouter.put('/addPhoto', async (req, res) => {
    const { id } = req.body
    const serviceFound = await Service.findById(id)
    let image

    if (req.files?.image) {
        const result = await uploadServiceImage(req.files.image.tempFilePath)
        image = {
            public_id: result.public_id,
            secure_url: result.secure_url,
        }
    }

    serviceFound.image = image

    await serviceFound.save()

    res.status(200).json('ok')
})

servicesRouter.put('/:id', handlerPutService)

servicesRouter.delete('/:id', handlerDeleteService)

module.exports = servicesRouter
