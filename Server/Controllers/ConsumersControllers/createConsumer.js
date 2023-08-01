const Consumer = require('../../Models/consumer')

const createConsumer = async (newConsumer) => {
    try {
        const usernameRepeated = await Consumer.findOne({
            usernameLower: newConsumer.usernameLower,
        })
        const emailRepeated = await Consumer.findOne({
            email: newConsumer.email,
        })
        if (emailRepeated) throw new Error('emailRepetido')
        if (usernameRepeated) throw new Error('usernameRepetido')
    
        await Consumer.create(newConsumer)
        return true

    } catch (error) {
        return error.message
    }
}

module.exports = createConsumer
