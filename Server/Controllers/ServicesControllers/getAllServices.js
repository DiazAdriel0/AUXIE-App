const { default: mongoose } = require('mongoose')
const Service = require('../../Models/service')

const getAllServices = async (/* serviceName, serviceCategory */) => {
    /* const filter = {}
    if (serviceName) {
        filter.name = serviceName
    }
    if (serviceCategory) {
        filter.category = serviceCategory
    } */
    Service.find({}).then((result) => {
        console.log(result)
        mongoose.connection.close()
    })
}

module.exports = getAllServices
