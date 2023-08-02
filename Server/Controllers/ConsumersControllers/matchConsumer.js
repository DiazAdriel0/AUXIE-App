const Consumer = require('../../Models/consumer')
const bcrypt = require('bcrypt')

const matchConsumer = async (email, password) => {
    try {
        let consumer = await Consumer.findOne({ email })
        if (consumer) {
            console.log(consumer)
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
                id:consumer._id
            }
            
            return passwordMatch ? consumerWithout : new Error('wrongPassword')
        } else {
            throw new Error('inexistente')
        }
    } catch (error) {
        
        console.log(error.message)

        return error
    }
}

module.exports = matchConsumer
