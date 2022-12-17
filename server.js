const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/lpage', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(3000, () => console.log('API is running on http://localhost:3000/lpage'));




// var app = require('express')();
// var http = require('http').createServer(app);
// const PORT = 8080;
// var io = require('socket.io')(http);
// const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

// http.listen(PORT, () => {
//     console.log(`listening on *:${PORT}`);
// });

// io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
//     console.log('new client connected');
//     socket.emit('connection', null);
// });


// var socket = socketClient (SERVER);
//     socket.on('connection', () => {
//         console.log(`I'm connected with the back-end`);
// });