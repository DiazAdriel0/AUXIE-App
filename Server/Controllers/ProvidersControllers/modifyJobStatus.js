const Provider = require('./../../Models/provider')
const Consumer = require('./../../Models/consumer')

const modifyJobStatus = async (req)=>{

    const {id, consumerId, providerId, status} = req.body
    try {
        
        const consumer = await Consumer.findById({_id:consumerId}) //eslint-disable-line
        const provider = await Provider.findById({_id:providerId})
        const newJobs = provider.jobs.map((job)=>{
            if(job.id === id){
                let theJob = {
                    ...job,
                    status: status,
                }
                return theJob
            }else{
                return job
            }
        })
        const newReqServices = consumer.requiredServices.map((service)=>{
            if(service.providerId === providerId){ //xq la forma en la q estan 
                let theService = {                  //los id del job es dudosa
                    ...service,
                    status: status,
                }
                return theService
            }else{
                return service
            }
        })
        const update = await Provider.updateOne({_id:providerId},{jobs: newJobs})
        const update2 = await Consumer.updateOne({_id:consumerId},{requiredServices: newReqServices})
        if(!update.modifiedCount || !update2.modifiedCount)return false

        return newJobs
 
    } catch (error) {
        return false
    }
    
}

module.exports = modifyJobStatus