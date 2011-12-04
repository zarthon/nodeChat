var server = require("./server"),
    router = require( "./router" ),
    handler = require( "./requestHandlers" ),
    formidable = require( "formidable" );

var handle = {}
handle['/'] = handler.start;
handle['/start'] = handler.start;
handle['/upload'] = handler.upload;
handle['/show'] = handler.show;
server.start(router.route, handle);
