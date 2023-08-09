const Provider = require('./../../Models/provider')

const addJob = async (newPendingService, id) => {
    const { service, description, clientId, jobDate } = newPendingService
    try {
        const providerFound = await Provider.findById(id)

        const addedJob = {
            id: 1,
            isActive: true,
            description,
            service,
            clientId,
            status: 'pending',
            price: 0,
            requestDate: Date.now(),
            jobDate,
        }

        if (providerFound.jobs?.length > 0) {
            addedJob.id =
                providerFound.jobs[providerFound.jobs.length - 1].id + 1
            providerFound.jobs.push(addedJob)
        } else {
            providerFound.jobs = [addedJob]
        }

        await providerFound.save()

        return true
    } catch (error) {
        console.error(error)
        return error
    }
}

module.exports = addJob
