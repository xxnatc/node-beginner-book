var server = require(__dirname + '/server');
var router = require(__dirname + '/router');
var requestHandlers = require(__dirname + '/requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);
