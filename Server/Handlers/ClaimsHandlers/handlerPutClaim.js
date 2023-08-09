const putClaim = require('../../Controllers/ClaimsControllers/putClaim')

const handlerPutClaim = async (req, res) => {
    try {
        const { answer } = req.body
        const { id } = req.params

        if (!answer) {
            throw new Error('Faltan datos')
        } else {
            const updatedClaim = await putClaim(id, answer)

            if (updatedClaim.message === 'El reclamo ya fue respondido') {
                throw new Error('El reclamo de este cliente ya fue respondido')
            } else {
                res.status(200).json(updatedClaim)
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerPutClaim
