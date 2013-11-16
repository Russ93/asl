var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var io = require('socket.io');

var app = express();
var httpServer = http.createServer(app);
var socketServer = io.listen(httpServer);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

fs.readdirSync('./controllers').forEach(function(file) {
	if (file.substr(-3) == '.js') {
		var route = require('./controllers/' + file);
		route.controller(app);
	}
});

app.get('/*', function(req, res) {

});

socketServer.sockets.on('connection', function(userSocket) {

	userSocket.on('event_from_client', function(data) {

		console.log(data);

		userSocket.broadcast.to(userSocket.room).emit('event_from_server', {
			data : data
		});

	});

});

httpServer.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
