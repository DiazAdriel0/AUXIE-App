const matchConsumer = require('../../Controllers/ConsumersControllers/matchConsumer')

const loginConsumer = async (req, res) => {
    const { password, email} = req.body
    try {
        const logedUser = await matchConsumer(email, password)
        if (logedUser.message === 'inexistente')
            throw new Error(`el correo: ${email} no está registrado`)

        if (logedUser.message === 'wrongPassword')
            throw new Error('La contraseña es incorrecta')

        res.status(200).json(logedUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = loginConsumer
