const Claims = require('../../Models/claims')

const getClaims = async (consumerUsername, pending) => {
    try {
        const query = { consumerUsername }

        if (pending === 'true') {
            query.pending = true
            const projection = {
                consumerUsername: 1,
                message: 1,
                providerUsername: 1,
                reason: 1,
                image: 1,
                dateClaims: 1,
            }
            const claim = await Claims.find(query, projection)
            return claim
        }
        if (pending === 'false') {
            query.pending = false
            const projection = {
                consumerUsername: 1,
                message: 1,
                providerUsername: 1,
                reason: 1,
                image: 1,
                dateClaims: 1,
                answer: 1,
                dateAnswer: 1,
            }
            const claim = await Claims.find(query, projection)
            return claim
        } else {
            const claim = await Claims.find(query)
            if (!claim || claim.length === 0) {
                throw new Error('No hay reclamo')
            }
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = getClaims
