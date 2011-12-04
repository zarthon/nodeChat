var http = require("http");

function start() {
    var server = http.createServer(function (request, response){
        console.log( "Request Received\n" );
        var pathname = url
        response.writeHead( 200, {"Content-Type": "text/plain" });
        response.write("Hello World\n");
        response.end();
    });

    server.listen(8000);

    console.log("Sever running at http://127.0.0.1:8000");

}

exports.start = start;
