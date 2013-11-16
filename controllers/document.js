module.exports.controller = function(app) {

	app.get('/document/*', function(req, res) {
		res.render('document/index');
	});

};
