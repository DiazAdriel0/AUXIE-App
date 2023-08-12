const addFavProviders = require('../../Controllers/ConsumersControllers/addFavProviders')

const favoriteProviders = async (req, res) => {
    const { id, lastName, firstName, averageRating, services,consumerId } = req.body

    const favorite= {id, lastName, firstName, averageRating, services}
    try {
        
        const addedFav = await addFavProviders( consumerId, favorite)
        
        if(addedFav)return res.status(200).json(favorite)

    } catch (error) {
        res.status(500).json({error:error.message})
    }

    
}

module.exports = favoriteProviders