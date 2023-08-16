const Provider = require('./../../Models/provider')/* 
const Consumer = require('./../../Models/consumer') */

const modifyJobStatus = async (req)=>{

    const {id, /* consumerId */ providerId, status} = req.body
    console.log('aqui')
    try {
        /*  const consumer = await Consumer.findById({_id:consumerId}) */ //tecnicamente tendria que updatear tambein al consumer
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
        const update = await Provider.updateOne({_id:providerId},{jobs: newJobs})

        if(!update.modifiedCount)return false

        return newJobs
 
    } catch (error) {
        return false
    }
    
}

module.exports = modifyJobStatus