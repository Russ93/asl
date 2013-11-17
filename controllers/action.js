module.exports.controller = function(app) {

	app.get('/action/create', function(req, res) {

		var uuid = require('node-uuid');

		var liveModel = require('../models/live');
		liveModel.create({
			'document_id' : uuid.v4(),
			'owner' : 'alanjames1987@gmail.com',
			'title' : 'Some Document Title',
			'body' : 'Testing'
		}, function(err, results) {
			console.log(err);
			console.log(results);
		});

		res.send('<h1>Test</h1>');

	});

};
