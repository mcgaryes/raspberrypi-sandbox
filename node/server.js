var Server = require("monobrow-server").Server;
var server = new Server({
	host:"127.0.0.1",
	port:8889
});

server.on(Server.STATE_CHANGE,function(state){
	if(state === Server.RUNNING) {
		console.log("Server is running at " + server.address);
	}
});

server.on(Server.CLIENT_DID_CONNECT,function(){
	console.log("Connection made. Total Connections: " + server.totalConnections);
});

server.on(Server.CLIENT_DID_DISCONNECT,function(){
	console.log("Connection lost. Total Connections: " + server.totalConnections);
});

server.start();