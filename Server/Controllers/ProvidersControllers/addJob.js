/* eslint-disable no-prototype-builtins */
const Provider = require('./../../Models/provider')
const Consumer = require('./../../Models/consumer')

const addJob = async (newPendingService, id) => {
    const { service, description, clientId, jobDate, paymentMethod } =
        newPendingService
    try {
        const providerFound = await Provider.findById(id)
        const consumerFound = await Consumer.findById(clientId)

        const price = providerFound.services?.find(
            (service) => service.service === service
        )?.price
        let clientUid= consumerFound.userUid || consumerFound.googleId
    
        const addedJob = {
            id: 1,
            isActive: true,
            description,
            service,
            clientId,
            clientUid: `${clientUid}`,
            providerId: id,
            providerName: `${providerFound.firstName} ${providerFound.lastName}`,
            clientName: `${consumerFound.firstName} ${consumerFound.lastName}`,
            status: 'pending',
            requestDate: Date.now(),
            jobDate,
            price,
            paymentMethod,
        }

        if (providerFound.jobs?.length > 0) {
            addedJob.id =
                Number(providerFound.jobs[providerFound.jobs.length - 1].id) + 1
            providerFound.jobs.push(addedJob)
        } else {
            providerFound.jobs = [addedJob]
        }

        await providerFound.save()

        return providerFound
    } catch (error) {
        console.error(error)
        return error
    }
}

module.exports = addJob
