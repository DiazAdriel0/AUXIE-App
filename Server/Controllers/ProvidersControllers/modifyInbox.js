const Provider = require('../../Models/provider')

const modifyInbox = async (inbox, id) => {
    try {
        const providerFound = await Provider.findById(id)

        providerFound.inbox ? providerFound.inbox = [...providerFound.inbox, inbox] : providerFound.inbox= [inbox]

        providerFound.save()
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

module.exports = modifyInbox
