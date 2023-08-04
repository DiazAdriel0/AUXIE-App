const Service = require('../../Models/service')

const deleteService = async (id) => {
    try {
        const existingService = await Service.findOne({ _id: id })

        if (!existingService) {
            throw new Error('No se encontró el servicio')
        } else {
            existingService.isActive = false
            await existingService.save()
            return existingService
        }
    } catch (error) {
        return error
    }
}

module.exports = deleteService
