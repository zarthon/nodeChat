function route( pathname, handle ){
    console.log( "ROUTER:Recieved request to route: " + pathname + " !!" );
    if ( typeof handle[pathname] == 'function' ){
        handle[pathname]();
    } 
    else{
        console.log("ROUTER: No Request handler found for :" + pathname);
    }
}

exports.route = route;
