const Provider = require('./../../Models/provider')

const modifyProviderServices = async (services, id) => {
    try {
        let updatedServices = [...services]

        const provider = await Provider.findById(id)

        if (provider.services.length) {
            provider.services.forEach((service) => {
                const found = services.find(
                    (addedService) => addedService.name === service.name
                )
                !found && updatedServices.push(service)
            })
        }

        const updatedProvider = await Provider.updateOne(
            { _id: id },
            { services: updatedServices }
        )

        if (!updatedProvider.modifiedCount) throw new Error('sin cambios')

        return updatedProvider
    } catch (error) {
        return error
    }
}

module.exports = modifyProviderServices
