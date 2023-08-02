const { service } = require('../../Models/service')

const createService = async (name, category) => {
    try {
        const nameLower = name.toLowerCase()
        const categoryLower = category.toLowerCase()

        const existingService = await service.findOne({
            name: nameLower,
            category: categoryLower,
        })
        if (existingService) {
            throw new Error('Servicio repetido')
        } else {
            const newService = await service.create({
                name,
                category,
            })
            return newService
        }
    } catch (error) {
        return error
    }
}

module.exports = createService
