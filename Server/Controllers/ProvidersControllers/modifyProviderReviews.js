const Provider = require('./../../Models/provider')
const Consumer = require('./../../Models/consumer')

const modifyProviderReviews = async (recibedReview) => {
    const { consumerId, providerId, score, review, serviceName } = recibedReview

    try {
        const providerFound = await Provider.findById(providerId)

        if (!providerFound) throw new Error('provider inexistente')

        const consumerFound = await Consumer.findById(consumerId)

        if (!consumerFound) throw new Error('consumer inexistente')

        const ratings = [...providerFound.ratings, Number(score)]
        const averageRating =
            ratings.reduce(
                (accummulator, current) => accummulator + current,
                0
            ) / ratings.length

        const update = {
            $set: {
                reviews: [
                    ...providerFound.reviews,
                    {
                        username: consumerFound.username,
                        score: Number(score),
                        review,
                        service: serviceName,
                    },
                ],
                ratings,
                averageRating,
            },
        }

        const updatedProvider = await providerFound.updateOne(update)

        return updatedProvider
    } catch (error) {
        return error
    }
}

module.exports = modifyProviderReviews
