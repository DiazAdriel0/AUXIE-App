const { default: mongoose } = require('mongoose')
const Service = require('../../Models/service')

const getAllServices = async (/* serviceName, serviceCategory */) => {
    try {
        /* const filter = {}
    if (serviceName) {
        filter.name = serviceName
    }
    if (serviceCategory) {
        filter.category = serviceCategory
    } */
        const services = await Service.find({})
        mongoose.connection.close()
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
