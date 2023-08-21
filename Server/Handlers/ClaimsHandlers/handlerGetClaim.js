const getClaim = require('../../Controllers/ClaimsControllers/getClaim')

const handlerGetClaim = async (req, res) => {
    try {
        const { email } = req.query

        if (!email) {
            throw new Error('Falta el email')
        }
        const claim = await getClaim(email)
        if (!claim.length) {
            throw new Error('No se encontraron reclamos')
        }
        res.status(200).json(claim)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerGetClaim
