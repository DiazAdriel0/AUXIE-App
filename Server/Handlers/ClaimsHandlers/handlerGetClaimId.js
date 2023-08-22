const getClaimId = require('./../../Controllers/ClaimsControllers/getClaimId')

const handlerGetClaimId = async (req, res) => {
    try {
        const { id } = req.params

        const claimFound = await getClaimId(id)

        if (claimFound.message === 'id inexistente')
            throw new Error(
                'No se encontró ningún reclamo con el ID especificado'
            )

        res.status(200).json(claimFound)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerGetClaimId
