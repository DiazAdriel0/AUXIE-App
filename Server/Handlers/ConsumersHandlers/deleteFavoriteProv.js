const deleteFavProvider = require('../../Controllers/ConsumersControllers/deleteFavProvider')

const deleteFavoriteProv = async (req, res)=>{
    const {consumerId, id} = req.query
    try {
        const updated = await deleteFavProvider(consumerId, id)
        return updated ? res.status(200).json(updated.favoritesProviders)
            : new Error ('Falla al actualizar')


    } catch (error) {
        res.status(500).json({error:error.message}) 
    }

}

module.exports = deleteFavoriteProv