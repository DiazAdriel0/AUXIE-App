const Service = require('../../Models/service')

const createService = async (name, category) => {
    try {
        const nameLower = name.toLowerCase()
        const categoryLower = category.toLowerCase()

        const existingService = await Service.findOne({
            name: nameLower,
            category: categoryLower,
        })
        if (existingService) {
            throw new Error('Servicio repetido')
        } else {
            const newService = await Service.create({
                name,
                category,
            })
            console.log(newService)
            return newService
        }
    } catch (error) {
        return error
    }
}

module.exports = createService
