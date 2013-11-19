module.exports.controller = function(app) {

	//When the create button is clicked
	app.post('/action/create_document', function(req, res) {

		var uuid = require('node-uuid');
		var document_id = uuid.v4();

		var liveModel = require('../models/live');
		liveModel.create({
			'document_id' : document_id,
			'owner' : req.body.owner,
			'title' : req.body.title,
			'body' : ''
		}, function(err, results) {
			console.log(err);
			console.log(results);
		});

		res.json({
			document_id : document_id
		});
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
