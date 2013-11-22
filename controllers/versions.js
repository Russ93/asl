module.exports.controller = function(app) {

	app.get('/versions/:document_id', function(req, res) {

		var documentId = req.params.document_id;

		var versionModel = require('../models/version');
		versionModel.connect(function() {

			versionModel.readByDocumentId(documentId, function(err, results) {

				var data = {};
				data.document_id = documentId;
				data.versions = results;

				if (!data) {
					res.render('error/404');
				} else {
					res.render('versions/index', data);
				}

			});

		});

	});
};
