const postClaim = require('../../Controllers/ClaimsControllers/postClaim')

const handlerPostClaim = async (req, res) => {
    try {
        const { consumerUsername, message, providerUsername, reason, image } =
            req.body

        if (!consumerUsername || !message || !providerUsername || !reason) {
            throw new Error('Faltan datos')
        } else {
            const newClaim = await postClaim(
                consumerUsername,
                message,
                providerUsername,
                reason,
                image
            )
            res.status(200).json(newClaim)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerPostClaim
