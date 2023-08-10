const Consumer = require('../../Models/consumer')
const fs = require('fs-extra')
const { uploadProfileImageToConsumer } = require('../../Utils/cloudinary')

const modifyConsumer = async (req) => {

    const { firstName, lastName, address, image, username, userUid, id } =
        req.body

    try {
        const recibedProperties = {
            id,
            userUid,
            firstName,
            lastName,
            address,
            username,
            usernameLower: username?.toLowerCase(),

            image,
        }


        }

        if (req.files?.image) {
            const result = await uploadProfileImageToConsumer(
                req.files.image.tempFilePath
            )
            recibedProperties.image = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            }

            await fs.unlink(req.files.image.tempFilePath)
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

        const filledObject = Object.fromEntries(filledProperties)
        const consumer = await Consumer.updateOne({ _id: id }, filledObject)
        console.log(consumer)
        if (consumer.modifiedCount === 0)
            throw new Error('No se pudo actualizar')
        const consumer2 = await Consumer.findById({ _id: id })

        return consumer2

    } catch (error) {
        console.error(error)
        return false
    }
}

module.exports = modifyConsumer
