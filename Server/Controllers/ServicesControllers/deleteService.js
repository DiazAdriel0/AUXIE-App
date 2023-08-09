const Service = require('../../Models/service')

const deleteService = async (id) => {
    try {
        const existingService = await Service.findOne({ _id: id })

        if (!existingService || existingService.isActive === false) {
            throw new Error('No se encontró el servicio')
        } else {
            existingService.isActive = false
            await existingService.save()
            return {
                message: 'Eliminaste el servicio',
            }
        }
    } catch (error) {
        return error
    }
}

module.exports = deleteService
