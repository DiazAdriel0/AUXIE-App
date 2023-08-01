const Consumer = require('../../Models/consumer')
const bcrypt = require('bcrypt')

const loginC = async (email, password)=>{

    try {
        const consumer = await Consumer.findOne({email})
        if (consumer) {
            const passwordMatch = await bcrypt.compare(password, consumer.password)
            return passwordMatch ? consumer : new Error ('wrongPassword')
        } else {
            throw new Error('inexistente')
        }
    } catch (error) {
        return error.message
    }


}

module.exports = loginC