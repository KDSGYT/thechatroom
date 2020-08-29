const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on( 'connection', (socket) =>{
    console.log(`connected: ${socket.id}`)

    socket.on('disconnect', () =>  console.log("disconnect", socket.id))
    socket.on('sent', (data) => {
        data.id="received"
        socket.broadcast.emit('received',data);
    })

})

server.listen(8080)