const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

app.use(express.json());

// console.log("test")

app.get('/', (req, res) => {
    console.log('Received request on /');
    res.send('Chat app backend is running');
    
});

io.on('connection', socket => {
    console.log('New WebSocket connection');

    socket.on('disconnect', () => {
        console.log('User has disconnected');
    });
});


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
