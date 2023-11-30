import { io } from '@src/app.js';

export const nameSpace_Chat = () => {
  //
  io.of('/chat').on('connection', (socket) => {
    socket.emit('socketid', { socketId: socket.id });
    socket.on('sendSocketId', () => {
      socket.emit('socketid', { socketId: socket.id });
    });

    socket.on('new-join-request', (data: { name: string; room: string }) => {
      socket.join(data.room);
      socket.to(data.room).emit('new-ninja', { name: data.name });
    });

    socket.on('message', (data: { name: string; room: string; message: string }) => {
      const user = data.name;
      const message = data.message;
      io.of('/chat').to(data.room).emit('message', { user, message, socketId: socket.id });
    });
  });
};
