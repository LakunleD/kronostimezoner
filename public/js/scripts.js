const socket = io('http://localhost:8000/');

socket.on('connect', (data) => {
  console.log('hello world');
  console.log(data)
});
