const Claims = require('../../Models/claims')

const getClaim = async (id) => {
    try {
        const claim = await Claims.findOne(
            { _id: id },
            {
                consumerUsername: 1,
                message: 1,
                providerUsername: 1,
                reason: 1,
                image: 1,
            }
        )

        if (!claim) {
            throw new Error('No hay reclamo')
        } else {
            return claim
        }
    } catch (error) {
        return error
    }
}

module.exports = getClaim
