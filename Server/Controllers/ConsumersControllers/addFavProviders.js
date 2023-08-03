const Consumer = require('../../Models/consumer')

const addFavProviders = async (consumerId, favorite) => {

    try {
        const consumer = await Consumer.findById(consumerId)
        console.log(consumer)
        if(!consumer)return false
        consumer.favoritesProviders.push(favorite)
        console.log(consumer.favoritesProviders)
        const updated = await Consumer.updateOne({_id:consumerId},{favoritesProviders:consumer.favoritesProviders})
        console.log(updated)
        if(updated.modifiedCount)return true

    } catch (error) {
        
        return false
    }

}

module.exports = addFavProviders