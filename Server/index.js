require('dotenv').config()
const mongoose = require('mongoose')
const server = require('./App/app')
const { Server } = require('socket.io')
const { createServer } = require('http')

const { MONGO_DB_CONNECTION, PORT } = process.env

const httpServer = createServer(server)

const port = PORT || 3001

const connectionString = `${MONGO_DB_CONNECTION}`

mongoose
    .connect(connectionString)
    .then(() => {
        console.log('Database Connected')
        httpServer.listen(port, () => {
            console.log(`server raised on port: ${port}`)
        })
    })
    .catch((error) => {
        console.error(error)
    })

const io = new Server(httpServer, {
    cors: {
        origin: ['http://localhost:5173', 'https://auxie-app.vercel.app'],
    },
})

io.on('connection', (socket) => {
    console.log('User connected')

    socket.on('chatMessage', (message) => {
        // Lógica para manejar el mensaje recibido desde el cliente
        // Y luego puedes emitir eventos para enviar mensajes a todos los clientes conectados
        io.emit('chatMessage', message)
    })

    socket.on('disconnect', () => {
        console.log('A user disconnected')
    })
})
