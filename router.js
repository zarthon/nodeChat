function route( pathname, handle, response ){
    console.log( "ROUTER:Recieved request to route: " + pathname + " !!" );
    if ( typeof handle[pathname] == 'function' ){
        handle[pathname](response);
    } 
    else{
        console.log("ROUTER: No Request handler found for :" + pathname);
        
        response.writeHead(404, {"Content-Type": "text/plain" });
        response.write( "ROUTER: No Request handler found for :" + pathname
 );
        response.end();
        
    }
}

exports.route = route;
