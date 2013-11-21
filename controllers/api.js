module.exports.controller = function(app) {
	app.get('/api/read_versions_by_document_id', function(req, res) {

		var versionModel = require('../models/version');
		versionModel.connect(function() {
			versionModel.readByDocumentId({
				'document_id' : req.query.document_id
			}, function(err, results) {
				console.log(err);
				console.log(results);

				results.toArray(function(err, result) {
					res.json(result);
				})
			});

		});
	});

}