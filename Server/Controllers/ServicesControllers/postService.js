const Service = require('../../Models/service')

const postService = async (name, category) => {
    try {
        const nameLower = name.toLowerCase()
        const categoryLower = category.toLowerCase()

        const existingService = await Service.findOne({
            name: nameLower,
            category: categoryLower,
        })

        if (existingService) {
            if (existingService.isActive === true) {
                throw new Error('Servicio repetido')
            } else {
                existingService.isActive = true
                await existingService.save()
            }
        } else {
            const newService = await Service.create({
                name,
                category,
            })
            return newService
        }
    } catch (error) {
        return error
    }
}

module.exports = postService
