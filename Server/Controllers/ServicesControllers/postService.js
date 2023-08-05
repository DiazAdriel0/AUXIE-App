const Service = require('../../Models/service')

const postService = async (name, category, image) => {
    try {
        const nameLower = name.toLowerCase()
        const categoryLower = category.toLowerCase()

        let existingService = await Service.findOne({
            nameLower,
            categoryLower,
        })

        if (existingService) {
            if (existingService.isActive) {
                throw new Error('Servicio repetido')
            } else {
                existingService.isActive = true
                await existingService.save()
                return 'El servicio fue creado'
            }
        } else {
            await Service.create({
                category,
                categoryLower,
                name,
                nameLower,
                image,
            })
            return 'El servicio fue creado'
        }
    } catch (error) {
        return error
    }
}

module.exports = postService
