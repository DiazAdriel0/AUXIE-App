const Consumer = require('../../Models/consumer')
const bcrypt = require('bcrypt')

const matchConsumer = async (email, password) => {
    try {
        if (password.googleId) {
            const consumer = await Consumer.findOne({ email })

            if (consumer) {
                const consumerWithout = {
                    isActive: consumer.isActive,
                    isAdmin: consumer.isAdmin,
                    firstName: consumer.firstName,
                    lastName: consumer.lastName,
                    gender: consumer.gender,
                    age: consumer.age,
                    email: consumer.email,
                    username: consumer.username,
                    ratings: consumer.ratings,
                    favoritesProviders: consumer.favoritesProviders,
                    requiredServices: consumer.requiredServices,
                    registerDate: consumer.registerDate,
                    id: consumer._id,
                    image: consumer.image,
                    googleId: consumer.googleId,
                    firstLogin: consumer.firstLogin,
                    address: consumer.address,
                    isAuxie: consumer.isAuxie,
                }
                return consumerWithout
            } else {
                let newConsumer = {
                    email,
                    googleId: password.googleId,
                    isActive: true,
                }

                if (password.name.indexOf(' ') !== -1) {
                    const names = password.name.split(' ')
                    newConsumer.firstName = names[0]
                    newConsumer.lastName = names[1]
                }
                // eslint-disable-next-line no-prototype-builtins
                if (!newConsumer.hasOwnProperty('lastName')) {
                    newConsumer.firstName = password.name
                }
                newConsumer.image = { secure_url: password.picture }
                await Consumer.create(newConsumer)
                const theConsumer = await Consumer.findOne({ email })
                return theConsumer
            }
        }

        const consumer = await Consumer.findOne({ email })

        if (consumer) {
            const passwordMatch = await bcrypt.compare(
                password,
                consumer.password
            )
            const consumerWithout = {
                isActive: consumer.isActive,
                isAdmin: consumer.isAdmin,
                firstName: consumer.firstName,
                lastName: consumer.lastName,
                gender: consumer.gender,
                age: consumer.age,
                email: consumer.email,
                username: consumer.username,
                ratings: consumer.ratings,
                favoritesProviders: consumer.favoritesProviders,
                requiredServices: consumer.requiredServices,
                registerDate: consumer.registerDate,
                id: consumer._id,
                image: consumer.image,
                userUid: consumer.userUid,
                firstLogin: consumer.firstLogin,
                address: consumer.address,
                isAuxie: consumer.isAuxie,
            }

            return passwordMatch ? consumerWithout : new Error('wrongPassword')
        } else {
            throw new Error('inexistente')
        }
    } catch (error) {
        console.error(error.message)
        return error
    }
}

module.exports = matchConsumer
