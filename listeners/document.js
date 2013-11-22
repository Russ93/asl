module.exports.setup = function(socketServer, userSocket) {

	var liveModel = require('../models/live');

	userSocket.on('entered_room_from_client', function(data) {
		console.log("user has joined");
		userSocket.room = data.room;
		console.log(userSocket.room);
	});

	userSocket.on('title_event_from_client', function(data) {
		userSocket.broadcast.to(userSocket.room).emit('title_event_from_server', data);

		//Update doc title
		liveModel.connect(function() {

			liveModel.readById(data.document_id, function(err, results) {
				var doc = results;

				doc.title = data.title;

				liveModel.update(doc, function(err, results) {
					console.log(err);
				});

			});

		});
	});

	userSocket.on('body_event_from_client', function(data) {
		userSocket.broadcast.to(userSocket.room).emit('body_event_from_server', data);

		//Update doc body
		liveModel.connect(function() {
			
			liveModel.readById(data.document_id, function(err, results) {
				var doc = results;

				doc.body = data.body;

				liveModel.update(doc, function(err, results) {
					console.log(err);
				});

			});

		});

	});

};