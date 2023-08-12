const Service = require('../../Models/service')

const postService = async (category, name, image) => {
    try {
        const categoryLower = category.toLowerCase()
        const nameLower = name.toLowerCase()

        let existingService = await Service.findOne({
            categoryLower,
            nameLower,
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
            return {
                message: 'El servicio fue creado',
            }
        }
    } catch (error) {
        return error
    }
}

module.exports = postService
