/*
Primary file for the API

*/


//Dependencies

var http = require('http');


var server = http.createServer(function(res,req){
    res.end("Hello World!/n");
});


server.listen(3000, function(){
    console.log("The response on route 3000");
});