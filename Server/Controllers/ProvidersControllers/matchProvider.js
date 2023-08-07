const Provider = require('../../Models/provider')
const bcrypt = require('bcrypt')

const matchProvider = async (email, password) => {
    try {
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
            }
            return passwordMatch ? providerWithout : new Error('wrongPassword')
        } else {
            throw new Error('inexistente')
        }
    } catch (error) {
        return error
    }
}

module.exports = matchProvider
