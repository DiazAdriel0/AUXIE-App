const Claims = require('../../Models/claim')

const postClaim = async (
    consumerUsername,
    message,
    providerUsername,
    reason,
    image
) => {
    try {
        await Claims.create({
            consumerUsername,
            message,
            providerUsername,
            reason,
            image,
        })

        return {
            message: 'Reclamo realizado',
        }
    } catch (error) {
        return error
    }
}

module.exports = postClaim
