const Claims = require('../../Models/claims')

const postClaim = async (
    consumerUsername,
    message,
    providerUsername,
    reason,
    image
) => {
    try {
        const newClaim = await Claims.create({
            consumerUsername,
            message,
            providerUsername,
            reason,
            image,
        })

        return {
            message: 'Reclamo realizado',
            claim: newClaim,
        }
    } catch (error) {
        return error
    }
}

module.exports = postClaim
