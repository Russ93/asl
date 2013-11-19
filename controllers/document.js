module.exports.controller = function(app) {

	app.get('/document/:document_id', function(req, res) {
		
		var documentId = req.params.document_id;
		console.log(documentId)
		
		res.render('document/index');
	});

};
