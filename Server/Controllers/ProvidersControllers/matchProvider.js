const Provider = require('../../Models/provider')
const bcrypt = require('bcrypt')

const matchProvider = async (email, password) => {
    try {
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
                registerDate: provider.registerDate,
                services: provider.services,
                pendingServices: provider.pendingServices,
                completedWorks: provider.completedWorks,
                ratings: provider.ratings,
                reviews: provider.reviews
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