const Provider = require('./../../Models/provider')
const Service = require('./../../Models/service')

const modifyProviderServices = async (servicesIds, providerId) => {
    try {
        const providerFound = await Provider.findById(providerId)

        let updatedServices = [...providerFound.services]

        // A updatedServices no se pushean servicios que ya esten entre los que el provider ofrece
        for (const id of servicesIds) {
            const serviceFound = await Service.findById(id)
            if (providerFound.services.length) {
                const found = providerFound.services.find(
                    (service) => service._id.toString() === id
                )
                if (!found) {
                    updatedServices.push(serviceFound)
                }
            } else {
                updatedServices.push(serviceFound)
            }

            //Si el provider no estaba suscrito al servicio se agrega al array providers de la coleccion services
            if (serviceFound.providers.length) {
                const isSuscribed = serviceFound.providers.find(
                    (provider) =>
                        provider._id.toString() === providerFound._id.toString()
                )
                if (!isSuscribed) {
                    serviceFound.providers.push(providerFound._id)

                    await serviceFound.save()
                }
            } else {
                serviceFound.providers.push(providerFound._id)

                await serviceFound.save()
            }
        }

        const updatedProvider = await Provider.updateOne(
            { _id: providerId },
            { services: updatedServices }
        )

        if (!updatedProvider.modifiedCount) throw new Error('sin cambios')

        return updatedProvider
    } catch (error) {
        return error
    }
}

module.exports = modifyProviderServices
