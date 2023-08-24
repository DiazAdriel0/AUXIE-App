const Claims = require('../../Models/claim')

const getClaims = async (email) => {
    try {
        const claims = await Claims.find({email})
        const arrClaim = []
        claims.forEach (claim => {
            if (claim.pending === true) {
                const userClaim = {
                    id: claim._id.toString(),
                    email: claim.email,
                    consumerUsername: claim.consumerUsername,
                    message: claim.message,
                    providerUsername: claim.providerUsername,
                    reason: claim.reason,
                    image: claim.image,
                    dateClaims: claim.dateClaims,
                    pending: claim.pending,
                    isConsumer: claim.isConsumer,
                }
                arrClaim.push(userClaim)
            } else {
                const userClaim = {
                    id: claim._id.toString(),
                    email: claim.email,
                    consumerUsername: claim.consumerUsername,
                    message: claim.message,
                    providerUsername: claim.providerUsername,
                    reason: claim.reason,
                    image: claim.image,
                    dateClaims: claim.dateClaims,
                    answer: claim.answer,
                    dateAnswer: claim.dateAnswer,
                    pending: claim.pending,
                    isConsumer: claim.isConsumer,
                }
                arrClaim.push(userClaim)
            }
        })
        return arrClaim

        
           
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = getClaims
