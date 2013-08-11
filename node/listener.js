var Client = require("monobrow-client").Client;
var client = new Client({
	host: "192.168.1.109",
	port: 8889
});

client.on("custom", function(data) {
	console.log(data);
});

client.on(Client.STATE_CHANGE,function(state){
	if (state === Client.INITIALIZED) {
		console.log("disconnected");
	} else if(state === Client.CONNECTED) {
		console.log("connected");
	} else if (state === Client.DISCONNECTED) {
		console.log("disconnected");
	} else if(state === Client.ERROR) {
		console.log("there was an error");
	}
});

client.connect();