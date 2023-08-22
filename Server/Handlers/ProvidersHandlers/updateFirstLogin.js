const modifyFirstLogin = require('./../../Controllers/ProvidersControllers/modifyFirstLogin')

const updateFirstLogin = async (req, res) => {
    try {
        const { id } = req.body
        const modify = await modifyFirstLogin(id)

        if (!modify) throw new Error('No se realizaron cambios')

        res.status(200).json('Login modificado con exito')
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateFirstLogin
