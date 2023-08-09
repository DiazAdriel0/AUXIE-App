const Provider = require('../../Models/provider')
const bcrypt = require('bcrypt')

const matchProvider = async (email, password, req) => {
    try {
        if (req.user.email) {
            const provider = await Provider.findOne({ email })
            if (provider) {
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
                    googleId: provider.googleId,
                }
                return providerWithout
            } else {
                let newProvider = {
                    email: `${req.user.email}`,
                    isActive: true,
                    googleId: `${req.user.user_id}`,
                }

                if (req.user.name.indexOf(' ') !== -1) {
                    const names = req.user.name.split(' ')
                    newProvider.firstName = names[0]
                    newProvider.lastName = names[1]
                }
                // eslint-disable-next-line no-prototype-builtins
                if (!newProvider.hasOwnProperty('lastName')) {
                    newProvider.firstName = req.user.name
                }
                newProvider.image = { secure_url: req.user.picture }
                const theProvider = await Provider.create(newProvider)
                return theProvider
            }
        }
        const provider = await Provider.findOne({ email })
        const isMail = email.indexOf('@')
        if (isMail === -1) {
            const provider = await Provider.findOne({ username: email })
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
                }
                return passwordMatch
                    ? providerWithout
                    : new Error('wrongPassword')
            } else {
                throw new Error('inexistente')
            }
        }
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
