// "Import" the relevant modules. HTTP and Express to serve Websites.
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Choose which port to send out the HTML on. Websites normally use 80.
var port = 3000;

// Now our Server will send the Websites code to any browser that asks for it.
app.use(express.static('Website'));

// This is run when our website( Running in a browser. ), starts talking to us.
io.on('connection', function(socket){
	console.log('A user connected!');
	socket.on("foundname", function(data) {
		io.emit("newuser", data);
	});

	socket.on("message", function(data) {
		io.emit("message", data);
	});
});

// Start listening for connections on our chosen port.
http.listen(port, function(){
	// Print out some status information.
	console.log('listening on port '+port);
});
