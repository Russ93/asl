module.exports.controller = function(app) {

	//When the create button is clicked
	app.get('/action/create_document', function(req, res) {

		var uuid = require('node-uuid');

		var liveModel = require('../models/live');
		liveModel.create({
			'document_id' : uuid.v4(),
			'owner' : 'sbrwn.sb@gmail.com',
			'title' : 'Some Document Title',
			'body' : 'Testing'
		}, function(err, results) {
			console.log(err);
			console.log(results);
		});

		res.send('<h1>Test</h1>');

	});

	app.get('/action/create_version', function(req, res) {

	});

};
