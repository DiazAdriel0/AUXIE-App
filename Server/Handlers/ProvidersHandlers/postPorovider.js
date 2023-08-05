const createProvider = require('../../Controllers/ProvidersControllers/createProvider')
const bcrypt = require('bcrypt')

const postProvider = async (req, res) => {
    try {
        const { firstName, lastName, age, email, username, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const newProvider = {
            firstName,
            lastName,
            age,
            email: email.toLowerCase(),
            username,
            usernameLower: username.toLowerCase(),
            password: hashedPassword,
            image: 'https://img.freepik.com/free-icon/user_318-563642.jpg',
            isActive: true,
        }

        const createdProvider = await createProvider(newProvider)

        if (createdProvider.message === 'usuario repetido')
            throw new Error(
                `El nombre de usuario ${newProvider.username} ya existe`
            )
        if (createdProvider.message === 'email repetido')
            throw new Error(`El email ${newProvider.email} ya está registrado`)

        res.status(200).json(createdProvider)
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = postProvider
