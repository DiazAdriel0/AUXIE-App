const admin = require('../../config/firebase-config')
const axios = require('axios')

const revokeTokens = async (req, res)=>{
    const {googleId} = req.body

    try {
        await admin.auth().revokeRefreshTokens(googleId)
        axios.defaults.headers.common['authorization'] = null
        res.status(200).json({ message: 'Tokens revoked successfully' })
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: 'Error revoking tokens' })
    }
}

module.exports = revokeTokens