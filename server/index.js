const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

/**
 * When a new socket is connected when the following event listeners get into work
 */
io.on( 'connection', (socket) =>{
    console.log(`connected: ${socket.id}`)
    socket.on('disconnect', () =>  console.log("disconnect", socket.id))
    socket.on('sent', (data) => {
        data.id="received";
        socket.broadcast.emit('received',data);
    })
})

io.on('diconnect', () => {
    console.log("disconnectedd")
})

server.listen(8080)