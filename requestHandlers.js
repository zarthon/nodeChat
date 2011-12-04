

function start(){
    console.log( "HANDLER: Start called!!" );
}

function upload(){
    console.log( "HANDLER: Upload called" );
}

exports.start = start;
exports.upload = upload;
