const Provider = require('./../../Models/provider')

const updateGallery = async (newPhotos, id) => {
    try {
        const providerFound = Provider.findById(id)

        if (providerFound.gallery.length)
            providerFound.gallery = [...newPhotos, ...providerFound.gallery]
        else providerFound.gallery = [...newPhotos]

        providerFound.save()

        return true
    } catch (error) {
        return false
    }
}

module.exports = updateGallery
