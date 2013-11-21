module.exports.controller = function(app) {

	app.get('/document/:document_id', function(req, res) {

		var documentId = req.params.document_id;

		var liveModel = require('../models/live');
		liveModel.connect(function() {

			liveModel.readById(documentId, function(err, results) {

				var data = results;

				if (!data) {
					res.render('error/404');
				} else {
					res.render('document/index', data);
				}

			});

		});

	});

	app.get('/document/:document_id/:version_id', function(req, res) {

		var documentId = req.params.document_id;
		var versionId = req.params.version_id;

		var versionModel = require('../models/version');
		versionModel.connect(function() {

			versionModel.readByIdAndVersion(documentId, function(err, results) {

				var data = results;

				if (!data) {
					res.render('error/404');
				} else {
					res.render('document/index', data);
				}

			});

		});

	});

};
