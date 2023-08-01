const Provider = require('../../Models/provider')

const deleteProvider = async (id)=>{

    try {
        const provUser = await Provider.findById(id)

        if(!provUser) return false

        await Provider.updateOne({id}, {isActive: false})

        return true
        
    } catch (error) {
        return false
    }

}

module.exports = deleteProvider