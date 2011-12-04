var server = require("./server"),
    router = require( "./router" ),
    handler = require( "./requestHandlers" );

var handle = {}
handle['/'] = handler.start;
handle['/start'] = handler.start;
handle['/upload'] = handler.upload;
server.start(router.route, handle);
