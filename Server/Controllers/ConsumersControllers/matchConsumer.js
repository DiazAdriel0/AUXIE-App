const Consumer = require('../../Models/consumer')
const bcrypt = require('bcrypt')

const matchConsumer = async (email, password, req) => {
    try {
        if (req.user.email) {
            const consumer = await Consumer.findOne({ email })

            if (consumer) {
                const consumerWithout = {
                    isActive: true,
                    isAdmin: false,
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
                }
                return consumerWithout
            } else {
                let newConsumer = {
                    email: `${req.user.email}`,
                    isActive: true,
                    googleId: `${req.user.user_id}`,
                }

                if (req.user.name.indexOf(' ') !== -1) {
                    const names = req.user.name.split(' ')
                    newConsumer.firstName = names[0]
                    newConsumer.lastName = names[1]
                }
                // eslint-disable-next-line no-prototype-builtins
                if (!newConsumer.hasOwnProperty('lastName')) {
                    newConsumer.firstName = req.user.name
                }
                newConsumer.image = { secure_url: req.user.picture }
                const theConsumer = await Consumer.create(newConsumer)
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
                isActive: true,
                isAdmin: false,
                firstName: consumer.firstName,
                lastName: consumer.lastName,
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
