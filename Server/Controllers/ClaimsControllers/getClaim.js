const Claims = require('../../Models/claims')

const getClaim = async () => {
    try {
        const claim = await Claims.find({})
        if (claim.length === 0) {
            throw new Error('No hay reclamos')
        } else {
            return claim
        }
    } catch (error) {
        return error
    }
}

module.exports = getClaim