const createProvider = require('../../Controllers/ProvidersControllers/createProvider')

const postProvider = (req, res) => {
    try {
        console.log('Hola')
        const { firstName, lastName, age, email, username, password } = req.body
        const newProvider = {
            firstName,
            lastName,
            age,
            email,
            username,
            password,
        }

        const createdProvider = createProvider(newProvider)

        res.status(200).json(createdProvider)
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = postProvider
