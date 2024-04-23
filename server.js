// server.js
const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const Message = require('./models/Message');

console.log(process.env)


const app = express();
const server = http.createServer(app);
const io = socketio(server);

// app.use(express.json());

app.use(express.static('public'));  



app.get('/', (req, res) => {
  res.send('Chat app backend is running');
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chat.html'));  // Adjust the path according to your directory structure
});

io.on('connection', socket => {
  console.log('New user connected');

  // Join room
  socket.on('joinRoom', ({ room, username }) => {
      socket.join(room);
      socket.to(room).emit('message', `${username} has joined the room`);
  });

  // Handle chat messages
  socket.on('chatMessage', async ({ room, username, text }) => {
      try {
          const message = { room, username, text };
          await Message.addMessage(message);
          io.to(room).emit('message', { username, text });
      } catch (error) {
          console.error('Error saving message:', error);
      }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
      console.log('User disconnected');
      io.emit('message', 'A user has disconnected');
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
