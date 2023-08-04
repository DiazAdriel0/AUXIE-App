const Provider = require('./../../Models/provider')
const Service = require('./../../Models/service')

const modifyProviderServices = async (services, id) => {
    try {
        const providerFound = await Provider.findById(id)

        let updatedServices = [...services]

        // Si hay un servicio repetido, updatedServices solo se queda con el nuevo
        if (providerFound.services.length) {
            providerFound.services.forEach((service) => {
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

        //Si el provider no estaba suscrito al servicio se agrega al array providers de la coleccion services
        services.forEach(async (service) => {
            const foundService = await Service.findOne({
                name: service.name,
            })

            const isSuscribed = foundService.providers.find(
                (provider) => provider === providerFound.username
            )

            if (!isSuscribed) {
                foundService.providers.push(providerFound.username)

                await foundService.updateOne({
                    providers: foundService.providers,
                })
            }
        })

        return updatedProvider
    } catch (error) {
        return error
    }
}

module.exports = modifyProviderServices
