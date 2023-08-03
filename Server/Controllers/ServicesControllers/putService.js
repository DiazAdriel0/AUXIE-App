const Service = require('../../Models/service')

const putService = async (id, name, category) => {
    try {
        const existingService = await Service.findOne({ _id: id })

        if (!existingService) {
            throw new Error('El servicio no existe')
        }

        if (name) {
            existingService.name = name
            existingService.nameLower = name.toLowerCase()
        }

        if (category) {
            existingService.category = category
            existingService.categoryLower = category.toLowerCase()
        }

        const updatedService = await existingService.save()
        return updatedService
    } catch (error) {
        return error
    }
}

module.exports = putService
