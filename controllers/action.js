module.exports.controller = function(app) {

	//When the create button is clicked
	app.post('/action/create_document', function(req, res) {

		var uuid = require('node-uuid');
		var document_id = uuid.v4();

		var liveModel = require('../models/live');
		liveModel.connect(function() {

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

	});

	app.post('/action/create_version', function(req, res) {

		var dt = Math.round(new Date().getTime());
		
		var versionModel = require('../models/version');
		versionModel.connect(function() {

			versionModel.create({
				'version_id' : dt,
				'document_id' : req.body.document_id,
				'title' : req.body.title,
				'body' : req.body.body
			}, function(err, results) {
				console.log(err);
				console.log(results);
			});

		});

		res.json({
			dt : dt
		});
	});
	
	
	

};
