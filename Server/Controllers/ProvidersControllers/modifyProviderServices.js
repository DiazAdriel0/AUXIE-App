const Provider = require('./../../Models/provider')
const Service = require('./../../Models/service')

const modifyProviderServices = async (services, providerId) => {
    try {
        const providerFound = await Provider.findById(providerId)

        let updatedServices = [...providerFound.services]

        // A updatedServices no se pushean servicios que ya esten entre los que el provider ofrece
        for (const service of services) {
            const serviceFound = await Service.findById(service.id)
            if (providerFound.services.length) {
                const found = providerFound.services.find(
                    (service) => serviceFound._id.toString() === service.id
                )
                if (!found) {
                    updatedServices.push({
                        id: serviceFound._id.toString(),
                        price: service.price,
                        //provisorio
                        name: serviceFound.name,
                    })
                }
            } else {
                updatedServices.push({
                    id: serviceFound._id.toString(),
                    price: service.price,
                    //provisorio
                    name: serviceFound.name,
                })
            }
            //Si el provider no estaba suscrito al servicio se agrega al array providers de la coleccion services
            if (serviceFound.providers.length) {
                const isSuscribed = serviceFound.providers.find(
                    (provider) => provider === providerFound._id.toString()
                )
                if (!isSuscribed) {
                    serviceFound.providers.push(providerFound._id.toString())

                    await serviceFound.save()
                }
            } else {
                serviceFound.providers.push(providerFound._id.toString())

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
        console.error(error)
        return error
    }
}

module.exports = modifyProviderServices
