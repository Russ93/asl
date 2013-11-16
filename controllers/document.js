module.exports.controller = function(app) {

	app.get('/document/whatever', function(req, res) {
		res.render('document/whatever');
	});

};
