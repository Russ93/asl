module.exports.setup = function(socketServer, userSocket) {

	userSocket.on('title_event_from_client', function(data) {
		userSocket.broadcast.to(userSocket.room).emit('title_event_from_server', data);

		//Update doc title
	});

	userSocket.on('body_event_from_client', function(data) {
		userSocket.broadcast.to(userSocket.room).emit('body_event_from_server', data);
		console.log(data);
		//Update doc body
	});

}

