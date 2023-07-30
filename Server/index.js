require('dotenv').config()
const mongoose = require('mongoose')
const server = require('./App/app')
const { DB_PASSWORD } = process.env

const PORT = 3001
const connectionString = `mongodb+srv://AuxieAdminsUsername:${DB_PASSWORD}@cluster0.dlvfdkg.mongodb.net/?retryWrites=true&w=majority`

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