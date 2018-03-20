const path = require('path');
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Express endpoints

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// Websockets

io.on('connection', function (ws) {

	console.log('User connected.');

	setInterval(() => {
		ws.send('myEvent', 'Hello World!');
	}, 1000);

});

io.on('disconnect', function() {
  console.log('User disconnected');
});

io.on('error', (e) => {
	console.log(e);
});

http.listen(8888, () => {
	console.log('Listening on 8888');
});
