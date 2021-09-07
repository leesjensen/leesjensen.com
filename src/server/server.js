import express from 'express';

const server = express();
server.use(express.static('dist'));

server.get('/', express.static('app', { index: "index.html"}));

server.listen(4242, () => console.log('Server is running on http://localhost:4242 ...'));