const { default: mongoose } = require('mongoose')
const Service = require('../../Models/service')

const getAllServices = async (req, res /* serviceName, serviceCategory */) => {
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
        res.status(200).json(services)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getAllServices
