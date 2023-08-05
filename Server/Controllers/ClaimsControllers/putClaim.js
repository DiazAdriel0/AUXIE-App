const Claims = require('../../Models/claim')

const putClaim = async (id, answer) => {
    try {
        const existingClaim = await Claims.findOne({ _id: id })

        if (!existingClaim) {
            throw new Error('El reclamo no existe')
        }
        if (existingClaim.pending === false) {
            throw new Error('El reclamo ya fue respondido')
        } else {
            existingClaim.pending = false
            existingClaim.answer = answer
            await existingClaim.save()
            return {
                message: 'Respondiste al reclamo',
            }
        }
    } catch (error) {
        return error
    }
}

module.exports = putClaim
