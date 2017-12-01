var http = require("http");

http.createServer( function (request, response ) {
	//send the http header
	//http status 200 ok 
	//content type text plain 

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello there\n');

	}).listen(8081);

	console.log('server running at http:127.0.0.8081');
