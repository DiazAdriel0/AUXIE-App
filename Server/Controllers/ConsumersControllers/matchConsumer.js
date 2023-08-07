const Consumer = require('../../Models/consumer')
const bcrypt = require('bcrypt')

const matchConsumer = async (email, password) => {
    try {
        const consumer = await Consumer.findOne({ email })
        const isMail = email.indexOf('@')
        if(isMail === -1){
            const consumer = await Consumer.findOne({ username:email })
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
                    favoritesProviders:consumer.favoritesProviders,
                    requiredServices: consumer.requiredServices,
                    registerDate: consumer.registerDate,
                    id:consumer._id,
                    image: consumer.image,
                }
    
                return passwordMatch ? consumerWithout : new Error('wrongPassword')
            } else {
                throw new Error('inexistente')
            }

        }    
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
                favoritesProviders:consumer.favoritesProviders,
                requiredServices: consumer.requiredServices,
                registerDate: consumer.registerDate,
                id:consumer._id,
                image: consumer.image,
            }

            return passwordMatch ? consumerWithout : new Error('wrongPassword')
        } else {
            throw new Error('inexistente')
        }
    } catch (error) {
        return error
    }
}

module.exports = matchConsumer
