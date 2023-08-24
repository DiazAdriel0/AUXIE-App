const Claims = require('../../Models/claim')

const postClaim = async (
    email,
    consumerUsername,
    message,
    providerUsername,
    reason,
    image,
    isConsumer,
    
) => {
    try {
        await Claims.create({
            email,
            consumerUsername,
            message,
            providerUsername,
            reason,
            image,
            isConsumer,
        })

        return {
            message: 'Reclamo realizado',
        }
    } catch (error) {
        return error
    }
}

module.exports = postClaim
