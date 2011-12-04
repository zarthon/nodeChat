var http = require("http"),
    url = require("url");

function start( route, handle ) {
    var server = http.createServer(function (request, response){
        console.log( "\nSERVER: New Request Received" );
        
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        
        console.log("SERVER:Request for " + pathname + " received");
        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("SERVER: Received Post Data Chunk");
        });

        request.addListener("end", function(){
            route(pathname, handle, response, postData);
        });
        
    });
    server.listen(8000);

    console.log("Sever running at http://127.0.0.1:8000");

}

exports.start = start;
