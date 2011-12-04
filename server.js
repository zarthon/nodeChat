var http = require("http"),
    url = require("url");

function start( route, handle ) {
    var server = http.createServer(function (request, response){
        console.log( "\nSERVER: New Request Received" );
        var pathname = url.parse(request.url).pathname;
        console.log("SERVER:Request for " + pathname + " received");

        route(pathname, handle );

        response.writeHead( 200, {"Content-Type": "text/plain" });
        response.write("Hello World\n");
        response.end();
    });

    server.listen(8000);

    console.log("Sever running at http://127.0.0.1:8000");

}

exports.start = start;
