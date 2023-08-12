const Service = require('../../Models/service')

const getServices = async () => {
    try {
        const services = await Service.find({ isActive: true }).select(
            '-nameLower -categoryLower'
        )
        if (services.length === 0) {
            throw new Error('No hay servicios')
        } else {
            return services
        }
    } catch (error) {
        return error
    }
}

module.exports = getServices
