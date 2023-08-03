const Consumer = require('../../Models/consumer')


const deleteFavProvider = async (consumerId, providerId) => {

    try {
        const consumer = await Consumer.findById(consumerId)
        
        if(!consumer)return false
        const filteredFavs = consumer.favoritesProviders.slice().filter( fav =>{
            return fav.id !== providerId
        })
        
        const updated = await Consumer.updateOne({_id:consumerId},{favoritesProviders:filteredFavs})

        return updated.modifiedCount ? true : false

    } catch (error) {
        return false
    }

}

module.exports = deleteFavProvider