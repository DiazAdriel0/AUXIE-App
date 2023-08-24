const getClaim = require('../../Controllers/ClaimsControllers/getClaim')
const getAllClaims = require('../../Controllers/ClaimsControllers/getAllClaims')

const handlerGetClaim = async (req, res) => {
    try {
        const { email } = req.query

        if (!email) {
            const allClaims = await getAllClaims()
            res.status(200).json(allClaims)
        } else {
            const claim = await getClaim(email)
            if (!claim.length) {
                throw new Error('No se encontraron reclamos')
            } else {
                res.status(200).json(claim)
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerGetClaim
