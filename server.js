const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let attendanceList = [];

io.on('connection', socket => {
  console.log('A client connected');
  socket.emit('attendanceUpdate', attendanceList);

  socket.on('updateAttendance', data => {
    // Update the attendance list with the new data
    attendanceList = data;
    // Broadcast the updated attendance list to all clients
    io.emit('attendanceUpdate', attendanceList);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});