const findAndUpdateProvider = require('./../../Controllers/ProvidersControllers/findAndUpdateProvider')
const updateGallery = require('./../../Controllers/ProvidersControllers/updateGallery')
const fs = require('fs-extra')
const {
    uploadProfileImageToProvider,
    uploadGalleryOfJobs,
} = require('./../../Utils/cloudinary')

const updateProvider = async (req, res) => {
    console.log(req.files)
    const {
        id,
        firstName,
        lastName,
        address,
        username,
        services,
        bio,
        userUid,
    } = req.body

    const recibedProperties = {
        id,
        firstName,
        lastName,
        address,
        username,
        usernameLower: username?.toLowerCase(),
        services,
        bio,
        userUid,
    }

    if (req.files) {
        if (req.files?.image) {
            const result = await uploadProfileImageToProvider(
                req.files.image.tempFilePath
            )
            recibedProperties.image = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            }

            await fs.unlink(req.files.image.tempFilePath)
        }

        if (req.files['gallery[]']) {
            try {
                const newPhotos = []
                for (const photo of req.files['gallery[]']) {
                    const result = await uploadGalleryOfJobs(
                        photo.tempFilePath,
                        id
                    )
                    newPhotos.push({
                        public_id: result.public_id,
                        secure_url: result.secure_url,
                    })

                    await fs.unlink(photo.tempFilePath)
                }
                const addImages = await updateGallery(newPhotos, id)
                if (!addImages)
                    throw new Error(
                        'No se pudieron agregar las imagenes a la galería'
                    )
            } catch (error) {
                console.error(error)
            }
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

    try {
        // eslint-disable-next-line no-unused-vars
        const update = await findAndUpdateProvider(filledObject, id)
        if (!update) {
            throw new Error('No se modificó ningún dato')
        }
        // if (update.message === 'id inexistente')
        //     throw new Error('No se encontró el usuario con el id asignado')

        // if (update.message === 'sin modificaciones')
        //     throw new Error('No se modificó ningún dato')

        res.status(200).json(update)
    } catch (error) {
       
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateProvider
