const Provider = require('./../../Models/provider')
const Consumer = require('./../../Models/consumer')
const Request = require('./../../Models/request')

const modifyJobPrice = async (req) => {
    const { id, consumerId, providerId, price } = req.body
    try {
        const request = await Request.findById(id)
        const consumer = await Consumer.findById(consumerId)
        const provider = await Provider.findById(providerId)

        request.price = price

        await request.save()

        const newJobs = provider.jobs.map((job) => {
            if (job.id === id) {
                let theJob = {
                    ...job,
                    price,
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
                    price,
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

module.exports = modifyJobPrice
