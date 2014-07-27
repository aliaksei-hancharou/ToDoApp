var http = require('http')
express = require('express'),
routes = require('./routes')
config = require('./config'),
handlers = require('./requestHandlers'),
app = express(),
server = app.listen(config.config.port, function() {

	app.use(express.static(__dirname));
	app.use(express.bodyParser());
	routes.setRoutes(app, handlers);
	console.log('Server up, listening %d', server.address().port);

});
