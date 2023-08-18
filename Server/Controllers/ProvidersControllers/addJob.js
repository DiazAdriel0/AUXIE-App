/* eslint-disable no-prototype-builtins */
const Provider = require('./../../Models/provider')
const Consumer = require('./../../Models/consumer')
const Request = require('./../../Models/request')

const addJob = async (newPendingService, id) => {
    const { service, description, clientId, jobDate, paymentMethod } =
        newPendingService
    try {
        const providerFound = await Provider.findById(id)
        const consumerFound = await Consumer.findById(clientId)

        const price = providerFound.services?.find(
            (serviceOnArray) => serviceOnArray?.name === service
        )?.price

        let clientUid = consumerFound.userUid || consumerFound.googleId

        const addedJob = {
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

        const request = await Request.create(addedJob)

        addedJob.id = request._id.toString()

        if (providerFound.jobs?.length > 0) {
            providerFound.jobs.push(addedJob)
        } else {
            providerFound.jobs = [addedJob]
        }

        if (consumerFound.requiredServices?.length > 0) {
            consumerFound.requiredServices.push(addedJob)
        } else {
            consumerFound.requiredServices = [addedJob]
        }

        await consumerFound.save()
        await providerFound.save()

        return providerFound
    } catch (error) {
        console.error(error)
        return error
    }
}

module.exports = addJob
