const Claim = require('../../Models/claim')

const getClaimId = async (id) => {
    try {
        const foundClaim = await Claim.findById(id)
        foundClaim.id = foundClaim._id.toString()
        return foundClaim
    } catch (error) {
        error.message = 'id inexistente'
        return error
    }
}

module.exports = getClaimId
