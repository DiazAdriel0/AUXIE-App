const { Server } = require('socket.io')

const socketIoFunctions = (httpServer) => {
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
}

module.exports = socketIoFunctions
