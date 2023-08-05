const getClaim = require('../../Controllers/ClaimsControllers/getClaim')

const handlerGetClaim = async (req, res) => {
    try {
        const claim = await getClaim()
        if (claim.message === 'No hay reclamos') {
            throw new Error('No se encontraron reclamos')
        }
        res.status(200).json(claim)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerGetClaim
