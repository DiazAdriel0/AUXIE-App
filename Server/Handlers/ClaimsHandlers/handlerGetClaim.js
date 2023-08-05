const getClaim = require('../../Controllers/ClaimsControllers/getClaim')

const handlerGetClaim = async (req, res) => {
    try {
        const { consumerUsername, pending } = req.query

        if (!consumerUsername) {
            throw new Error('Falta el nombre de usuario del consumidor')
        }
        const claim = await getClaim(consumerUsername, pending)
        if (claim.message === 'No hay reclamos') {
            throw new Error('No se encontraron reclamos')
        }
        res.status(200).json(claim)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerGetClaim
