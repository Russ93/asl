var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var databaseName = 'coactive';
var collectionName = 'version';

exports.create = function(version, fn) {

	mongoClient.connect('mongodb://127.0.0.1:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).insert(version, function(err, results) {
			fn(err, results);
		});

	});

};

exports.readById = function(id, fn) {

	mongoClient.connect('mongodb://127.0.0.1:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).find({
			'document_id' : id
		}, function(err, results) {
			fn(err, results);
		});

	});

};


exports.readByVersion = function(id, fn) {

	mongoClient.connect('mongodb://127.0.0.1:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).findOne({
			'version_id' : id
		}, function(err, results) {
			fn(err, results);
		});

	});

};

