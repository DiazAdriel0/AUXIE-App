const Provider = require('./../../Models/provider')
const Consumer = require('./../../Models/consumer')
const Request = require('./../../Models/request')

const modifyJobStatus = async (req) => {
    const { id, consumerId, providerId, status } = req.body
    console.log(status)
    try {
        const request = await Request.findById(id)
        const consumer = await Consumer.findById({ _id: consumerId })
        const provider = await Provider.findById({ _id: providerId })

        request.status = status

        await request.save()

        const newJobs = provider.jobs.map((job) => {
            if (job.id === id) {
                let theJob = {
                    ...job,
                    status: status,
                }
                return theJob
            } else {
                return job
            }
        })
        const newReqServices = consumer.requiredServices.map((service) => {
            if (service.id === id) {
                let theService = {
                    ...service,
                    status: status,
                }
                return theService
            } else {
                return service
            }
        })
        const update = await Provider.updateOne(
            { _id: providerId },
            { jobs: newJobs }
        )
        const update2 = await Consumer.updateOne(
            { _id: consumerId },
            { requiredServices: newReqServices }
        )
        if (!update.modifiedCount || !update2.modifiedCount) return false

        return newJobs
    } catch (error) {
        return false
    }
}

module.exports = modifyJobStatus
