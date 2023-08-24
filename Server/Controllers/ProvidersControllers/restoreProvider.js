const Provider = require('../../Models/provider')

const restoreProvider = async (id) => {
    try {
        const provUser = await Provider.findById(id)

        if (!provUser) return false

        provUser.isActive = true

        await provUser.save()

        return true
    } catch (error) {
        return false
    }
}

module.exports = restoreProvider
