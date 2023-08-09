const Consumer = require('../../Models/consumer')
const { uploadProfileImageToConsumer } = require('../../Utils/cloudinary')

const modifyConsumer = async (req) => {
    const { firstName, lastName, address, username, id } = req.body
    try {
        const recibedProperties = {
            id,
            firstName,
            lastName,
            address,
            username,
            usernameLower: username?.toLowerCase(),
        }

        if (req.files?.image) {
            const result = await uploadProfileImageToConsumer(
                req.files.image.tempFilePath
            )
            recibedProperties.image = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            }
        }

        const filledProperties = Object.entries(recibedProperties)
            // eslint-disable-next-line no-unused-vars
            .filter(([_, value]) => {
                return (
                    (typeof value === 'string' && value.trim() !== '') ||
                    (Array.isArray(value) && value.length > 0) ||
                    typeof value === 'object'
                )
            })
            .map(([key, value]) => [key, value])

        const filledObject = Object.fromEntries(filledProperties)

        const consumer = await Consumer.updateOne({ _id: id }, filledObject)

        if (consumer.modifiedCount === 0)
            throw new Error('No se pudo actualizar')

        return consumer
    } catch (error) {
        console.error(error)
        return false
    }
}

module.exports = modifyConsumer
