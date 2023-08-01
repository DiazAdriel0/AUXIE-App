const getAllServices = require('../../Controllers/ServicesControllers/getAllServices')

const handlerServices = async (req, res) => {
    try {
        const { name, category } = req.query
        if (!name && !category) {
            const allServices = await getAllServices()
            res.status(200).json({ allServices })
        }
        if (name && !category) {
            const servicesByName = await getAllServices({
                name: { $regex: name, $options: 'i' },
            })
            if (!servicesByName || servicesByName.length === 0) {
                throw new Error('No se encontraron servicios con ese nombre')
            } else {
                res.status(200).json(servicesByName)
            }
        }
        if (!name && category) {
            const servicesByCategory = await getAllServices({
                category: { $regex: category, $options: 'i' },
            })
            if (!servicesByCategory || servicesByCategory.length === 0) {
                throw new Error('No se encontraron categorias con ese nombre')
            } else {
                res.status(200).json(servicesByCategory)
            }
        } else {
            throw new Error(
                'Solo se puede proporcionar un parámetro de búsqueda'
            )
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = handlerServices
