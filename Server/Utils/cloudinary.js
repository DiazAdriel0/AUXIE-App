const cloudinary = require('cloudinary').v2
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
    process.env

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
})

const uploadProfileImageToProvider = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'AUXIE App/Profile photos/Providers',
    })
}

const uploadProfileImageToConsumer = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'AUXIE App/Profile photos/Consumers',
    })
}

const uploadServiceImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'AUXIE App/Services Images',
    })
}

const uploadClaimImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'AUXIE App/Claims Images',
    })
}

module.exports = {
    uploadProfileImageToProvider,
    uploadProfileImageToConsumer,
    uploadServiceImage,
    uploadClaimImage,
}
