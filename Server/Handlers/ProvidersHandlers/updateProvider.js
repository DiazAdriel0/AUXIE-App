const findAndUpdateProvider = require('./../../Controllers/ProvidersControllers/findAndUpdateProvider')

const updateProvider = async (req, res) => {
    const { id, firstName, lastName, address, image, username, services, bio } =
        req.body

    const recibedProperties = {
        id,
        firstName,
        lastName,
        address,
        image,
        username,
        usernameLower: username?.toLowerCase(),
        services,
        bio,
    }

    const filledProperties = Object.entries(recibedProperties)
        // eslint-disable-next-line no-unused-vars
        .filter(([_, value]) => {
            return (
                (typeof value === 'string' && value.trim() !== '') ||
                (Array.isArray(value) && value.length > 0)
            )
        })
        .map(([key, value]) => [key, value])

    const filledObject = Object.fromEntries(filledProperties)

    try {
        // eslint-disable-next-line no-unused-vars
        const update = await findAndUpdateProvider(filledObject)

        if (update.message === 'id inexistente')
            throw new Error('No se encontró el usuario con el id asignado')

        if (update.message === 'sin modificaciones')
            throw new Error('No se modificó ningún dato')

        res.status(200).json('Usuario actualizado')
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = updateProvider
