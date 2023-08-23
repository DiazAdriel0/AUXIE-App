const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert(
        JSON.parse(process.env.SERVICE_ACCOUNT_KEY)
    ),
})

module.exports = admin
