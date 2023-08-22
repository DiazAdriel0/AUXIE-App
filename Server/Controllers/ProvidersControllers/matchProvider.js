const Provider = require('../../Models/provider')
const bcrypt = require('bcrypt')

const matchProvider = async (email, password) => {
    try {
        if (password.googleId) {
            const provider = await Provider.findOne({ email })
            if (provider) {
                const providerWithout = {
                    id: provider._id,
                    isActive: provider.isActive,
                    firstName: provider.firstName,
                    lastName: provider.lastName,
                    gender: provider.gender,
                    age: provider.age,
                    email: provider.email,
                    username: provider.username,
                    image: provider.image,
                    registerDate: provider.registerDate,
                    services: provider.services,
                    jobs: provider.jobs,
                    ratings: provider.ratings,
                    reviews: provider.reviews,
                    googleId: provider.googleId,
                    inbox: provider.inbox,
                    gallery: provider.gallery,
                    firstLogin: provider.firstLogin,
                    address: provider.address,
                    isAuxie: provider.isAuxie,
                }
                return providerWithout
            } else {
                let newProvider = {
                    email: password.email,
                    isActive: true,
                    googleId: password.googleId,
                }

                if (password.name.indexOf(' ') !== -1) {
                    const names = password.name.split(' ')
                    newProvider.firstName = names[0]
                    newProvider.lastName = names[1]
                }
                // eslint-disable-next-line no-prototype-builtins
                if (!newProvider.hasOwnProperty('lastName')) {
                    newProvider.firstName = password.name
                }
                newProvider.image = { secure_url: password.picture }
                await Provider.create(newProvider)
                const theProvider = await Provider.findOne({ email })
                return theProvider
            }
        }
        const provider = await Provider.findOne({ email })

        if (provider) {
            const passwordMatch = await bcrypt.compare(
                password,
                provider.password
            )
            const providerWithout = {
                id: provider._id,
                isActive: provider.isActive,
                firstName: provider.firstName,
                lastName: provider.lastName,
                age: provider.age,
                email: provider.email,
                username: provider.username,
                image: provider.image,
                registerDate: provider.registerDate,
                services: provider.services,
                jobs: provider.jobs,
                ratings: provider.ratings,
                reviews: provider.reviews,
                userUid: provider.userUid,
                inbox: provider.inbox,
                gallery: provider.gallery,
                firstLogin: provider.firstLogin,
                address: provider.address,
                isAuxie: provider.isAuxie,
            }
            return passwordMatch ? providerWithout : new Error('wrongPassword')
        } else {
            throw new Error('inexistente')
        }
    } catch (error) {
        console.error(error.message)
        return error
    }
}

module.exports = matchProvider
