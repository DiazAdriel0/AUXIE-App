const postClaim = require('../../Controllers/ClaimsControllers/postClaim')
const { uploadClaimImage } = require('./../../Utils/cloudinary')
const fs = require('fs-extra')

const handlerPostClaim = async (req, res) => {
    try {
        const { email, consumerUsername, message, providerUsername, reason, isConsumer } =
            req.body

        if (!email || !message || !providerUsername || !reason) {
            throw new Error('Faltan datos')
        } else {
            let image
            if (req.files?.image) {
                console.log('Archivo de imagen recibido:', req.files.image)
                const result = await uploadClaimImage(
                    req.files.image.tempFilePath
                )
                console.log('Respuesta de Cloudinary:', result)
                image = {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                }

                await fs.unlink(req.files.image.tempFilePath)
            }

            const newClaim = await postClaim(
                email,
                consumerUsername,
                message,
                providerUsername,
                reason,
                image,
                isConsumer
            )
            res.status(200).json(newClaim)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = handlerPostClaim
