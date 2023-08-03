const Consumer = require('../../Models/consumer')

const addFavProviders = async (consumerId, favorite) => {

    try {
        const consumer = await Consumer.findById(consumerId)

        if(!consumer)return false
        consumer.favoritesProviders.push(favorite)

        const updated = await Consumer.updateOne({_id:consumerId},{favoritesProviders:consumer.favoritesProviders})

        if(updated.modifiedCount)return true

    } catch (error) {
        
        return false
    }

}

module.exports = addFavProviders