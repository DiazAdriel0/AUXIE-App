const matchProvider = require('../../Controllers/ProvidersControllers/matchProvider')

const loginProvider = async (req, res) => {
    const { password } = req.body
    let {email} = req.body
    try {
        if(req.user){
            email = req.user.email
        }
        const logedUser = await matchProvider(email, password, req)

        if (logedUser.message === 'inexistente')
            throw new Error(`el correo: ${email} no está registrado`)

        if (logedUser.message === 'wrongPassword')
            throw new Error('La contraseña es incorrecta')

        res.status(200).json(logedUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = loginProvider
