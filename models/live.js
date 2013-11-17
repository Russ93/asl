var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var databaseName = 'coactive';
var collectionName = 'live';

exports.create = function(document, fn) {

	mongoClient.connect('mongodb://127.0.0.1:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).insert(document, function(err, results) {
			fn(err, results);
		});

	});

};

exports.readById = function(id, fn) {

	mongoClient.connect('mongodb://127.0.0.1:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).findOne({
			'document_id' : id
		}, function(err, results) {
			fn(err, results);
		});

	});

};

exports.update = function(document, fn) {

	mongoClient.connect('mongodb://127.0.0.1:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).update({
			'document_id' : document.document_id
		}, document, function(err, results) {
			fn(err, results);
		});

	});

};

