const socket = io('http://localhost:8000/');

socket.on('broadcast', (data) => {
  console.log('hello world');
  console.log(data);
});
