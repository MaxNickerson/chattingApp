// server.js
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { db } = require('./config/firebaseConfig');
const Message = require('./models/Message');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get('/', (req, res) => {
  res.send('Chat app backend is running');
});


io.on('connection', socket => {
    socket.on('chatMessage', async (msg) => {
        try {
            await Message.addMessage(msg);
            io.to(msg.room).emit('message', { username: msg.username, text: msg.text });
        } catch (error) {
            console.error('Error saving message:', error);
        }
    });
});

app.get('/messages/:room', async (req, res) => {
    try {
        const messages = await Message.getMessagesByRoom(req.params.room);
        res.json(messages);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
