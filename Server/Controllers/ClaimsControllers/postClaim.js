const Claims = require('../../Models/claim')

const postClaim = async (
    email,
    consumerUsername,
    message,
    providerUsername,
    reason,
    isConsumer,
) => {
    try {
        await Claims.create({
            email,
            consumerUsername,
            message,
            providerUsername,
            reason,
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
