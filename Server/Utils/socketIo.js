const { Server } = require('socket.io')

const socketIoFunctions = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: ['http://localhost:5173', 'https://auxie-app.vercel.app'],
        },
    })

    io.on('connection', (socket) => {
        io.emit('greeting','User connected')
    
        socket.on('disconnect', () => {
        })
    })
}

module.exports = socketIoFunctions
