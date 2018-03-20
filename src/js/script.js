$(document).ready(() => {

	console.log('Document ready');

	let socket = io('localhost:8888');

	socket.on('myEvent', function(msg) {
		console.log(msg);
	});

});
