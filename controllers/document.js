module.exports.controller = function(app) {

	app.get('/document/:document_id', function(req, res) {
		
		var documentId = req.params.document_id;
		console.log(documentId);
		
		var liveModel = require('../models/live');
		liveModel.readById(documentId, function(err, results){
			var data = results;
			res.render('document/index', data);
		});
		
		
	});

};
