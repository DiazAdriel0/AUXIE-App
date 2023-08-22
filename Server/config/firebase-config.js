const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert(process.env.SERVICE_ACCOUNT_KEY),
})

module.exports = admin
