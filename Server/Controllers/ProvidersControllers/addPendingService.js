const Provider = require('./../../Models/provider')

const addPendingService = async (newPendingService, id) => {
    const { service, clientId } = newPendingService
    try {
        const providerFound = await Provider.findById(id)

        providerFound.pendingServices.push({
            service,
            clientId,
            status: 'pending',
        })

        await providerFound.save()

        return true
    } catch (error) {
        return error
    }
}

module.exports = addPendingService
