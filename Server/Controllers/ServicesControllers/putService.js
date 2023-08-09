const Service = require('../../Models/service')

const putService = async (id, category, name, image) => {
    try {
        const categoryLower = category.toLowerCase()
        const nameLower = name.toLowerCase()
        const existingService = await Service.findOne({ _id: id })

        if (!existingService || existingService.isActive === false) {
            throw new Error('El servicio no existe')
        } else {
            if (category) {
                existingService.category = category
                existingService.categoryLower = categoryLower
            }

            if (name) {
                existingService.name = name
                existingService.nameLower = nameLower
            }

            if (image) {
                existingService.image = image
            }

            await existingService.save()
            return {
                message: 'El servicio fue actualizado',
            }
        }
    } catch (error) {
        return error
    }
}

module.exports = putService
