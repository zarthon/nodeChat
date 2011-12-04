var querystring = require("querystring"),
    fs = require("fs");
function start( response, postData ) {
    console.log( "HANDLER: Start called!!" );

/*    exec(" find /", function(error, stdout, stderr){
        response.writeHead( 200, {"Content-Type": "text/plain" });
        response.write(stdout);
        response.end();
    });
*/
    var body = '<html>'+
        '<head>'+
        '<meta http-equi="Content-Type" content="text/html charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows=20 cols=60 > </textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead( 200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload( response, postData ){
    console.log( "HANDLER: Upload called" );
    response.writeHead( 200, {"Content-Type": "text/plain" });
    response.write("Hello Upload" );
    response.write("You have sent: " + querystring.parse(postData).text);
    console.log( "HANDLER: " + postData );
    response.end();
}

function show( response, postData ){
    console.log( "HANDLER: Show called");
    fs.readFile( "/tmp/test.jpg", "binary", function(error, file){
        if(error){
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n" );
            reponse.end();
        }
        else{
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(file, "binary" );
            response.end();
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.show = show;
