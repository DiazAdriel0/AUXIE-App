const Claims = require('../../Models/claim')

const getClaims = async () => {
    try {
        const claims = await Claims.find()
        return claims
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = getClaims
