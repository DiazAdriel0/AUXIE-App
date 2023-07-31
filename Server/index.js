require('dotenv').config()
const mongoose = require('mongoose')
const server = require('./App/app')

const { MONGO_DB_CONNECTION, PORT } = process.env

const connectionString = `${MONGO_DB_CONNECTION}`

mongoose
    .connect(connectionString)
    .then(() => {
        console.log('Database Connected')
        server.listen(PORT, () => {
            console.log(`server raised on port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.error(error)
    })
