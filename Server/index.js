require('dotenv').config()
const mongoose = require('mongoose')
const server = require('./App/app')

const { MONGO_DB_CONNECTION, PORT } = process.env

const port = PORT || 3001

const connectionString = `${MONGO_DB_CONNECTION}`

mongoose
    .connect(connectionString)
    .then(() => {
        console.log('Database Connected')
        server.listen(port, () => {
            console.log(`server raised on port: ${port}`)
        })
    })
    .catch((error) => {
        console.error(error)
    })
