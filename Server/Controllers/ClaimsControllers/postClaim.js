const Claims = require('../../Models/claim')

const postClaim = async (
    email,
    consumerUsername,
    message,
    providerUsername,
    reason,
    image,
) => {
    try {
        await Claims.create({
            email,
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
