const Service = require('../../Models/service')

const getAllServices = async () => {
    try {
        const services = await Service.find({})
        if (services.length === 0) {
            throw new Error('No hay servicios')
        } else {
            return services
        }
    } catch (error) {
        return error
    }
}

module.exports = getAllServices
