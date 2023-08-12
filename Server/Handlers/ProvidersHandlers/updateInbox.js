const modifyInbox = require('../../Controllers/ProvidersControllers/modifyInbox')

const updateInbox = async (req, res) => {
    const { id, inbox } = req.body
    try {
        const messages = await modifyInbox(inbox,id)
        if(!messages){
            throw new Error('Error updating inbox')
        }
        res.status(200).json('Chat Iniciado')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  

 
}

module.exports = updateInbox
