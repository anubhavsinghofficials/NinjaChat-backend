import { io } from '@src/app.js';

export const nameSpace_Chat = () => {
  // This 👇 is the name of the namespace the client will be connected to
  io.of('/chat').on('connection', (socket) => {
    socket.on('new-join-request', (data: { name: string; room: string }) => {
      console.log(data);
    });
    // socket.join('newroom');
    // socket.emit('messageFromServer', 'a message from server', 'server boss');
    // socket.on('messagefromclient', (data, data2) => {
    //   io.of('/chat').to('newroom').emit('messagefromroom', data, data2, 'kya haal chaal');
    // });
    // socket.on('clientroommsg', (msg) => {
    //   io.of('/chat').to('newroom').emit('roomeaou', msg);
    // });
  });
};
