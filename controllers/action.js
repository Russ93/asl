module.exports.controller = function(app) {

	//When the create button is clicked
	app.get('/action/create_document', function(req, res) {

		var uuid = require('node-uuid');

		var liveModel = require('../models/live');
		liveModel.create({
			'document_id' : uuid.v4(),
			'owner' : req.owner,
			'title' : req.title,
			'body' : ''
		}, function(err, results) {
			console.log(err);
			console.log(results);
		});

		res.send('<h1>Test</h1>');

	});

	app.get('/action/create_version', function(req, res) {
		var uuid = require('node-uuid');

		var versionModel = require('../models/version');
		versionModel.create({
			'version_id' : uuid.v4(),
			'document_id' : '12345',
			'version' : 'UNIX TIMESTAMP PLEASE',
			'title' : 'Some Version Title',
			'body' : 'Version Testing'
		}, function(err, results) {
			console.log(err);
			console.log(results);
		});

		res.send('<h1>Test</h1>');
	});

};
