var server = require(__dirname + '/server');
var router = require(__dirname + '/router');

server.start(router.route);
