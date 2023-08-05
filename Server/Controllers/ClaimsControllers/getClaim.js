const Claims = require('../../Models/claim')

const getClaims = async (consumerUsername) => {
    try {
        const claims = await Claims.find({consumerUsername})
        const arrClaim = []
        claims.forEach (claim => {
            if (claim.pending === true) {
                const userClaim = {
                    consumerUsername: claim.consumerUsername,
                    message: claim.message,
                    providerUsername: claim.providerUsername,
                    reason: claim.reason,
                    image: claim.image,
                    dateClaims: claim.dateClaims,
                }
                arrClaim.push(userClaim)
            } else {
                const userClaim = {
                    consumerUsername: claim.consumerUsername,
                    message: claim.message,
                    providerUsername: claim.providerUsername,
                    reason: claim.reason,
                    image: claim.image,
                    dateClaims: claim.dateClaims,
                    answer: claim.answer,
                    dateAnswer: claim.dateAnswer,
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
