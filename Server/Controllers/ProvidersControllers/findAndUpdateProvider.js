const Provider = require('./../../Models/provider')

const findAndUpdateProvider = async (update) => {
    try {
        const query = { _id: update.id }
        delete update.id
        const toUpdate = update
        const options = {
            runValidators: true,
        }

        const updatedProvider = await Provider.updateOne(
            query,
            toUpdate,
            options
        )

        if (updatedProvider.matchedCount === 0)
            throw new Error('id inexistente')

        if (updatedProvider.modifiedCount === 0)
            throw new Error('sin modificaciones')

        return updatedProvider
    } catch (error) {
        return error
    }
}

module.exports = findAndUpdateProvider
