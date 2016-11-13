//websocket server

"Use Strict"

const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('node-uuid');


// Set the port to 4000
const PORT = 8080;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let counter = 0;

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
	console.log("Client connected")
	counter ++;
	wss.broadcast(JSON.stringify({type:"counter", count:counter}))
	
	ws.on('message', handleMessage);

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  wss.on('close', () => {
  	console.log('Client disconnected');
  	counter--;
  	wss.broadcast(JSON.stringify({type: "counter", count: counter}));
  });
});

function handleMessage(message) {
	const data = JSON.parse(message);

	switch (data.type) {
		case "postMessage":
			data.type = "incomingMessage"
			data.id = uuid.v4();
			wss.broadcast(JSON.stringify(data));
			break;

		case "postNotification":
			data.type = "incomingNotification"
			wss.broadcast(JSON.stringify(data));
			break;

		default:
			throw new Error("Unknown event ", data.type);
	}
}

wss.broadcast = function(message) {
	wss.clients.forEach((client) => {
		client.send(message);
	});
};

wss.broadcast = function broadcast(message) {
	wss.clients.forEach(function(client) {
		client.send(message);
	});
}

function sendText() {
  // Construct a msg object containing the data the server needs to process the message from the chat client.
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id:   clientID,
    date: Date.now()
  };

  // Send the msg object as a JSON-formatted string.
  SocketServer.send(JSON.stringify(msg));
  
  // Blank the text input element, ready to receive the next line of text from the user.
  document.getElementById("text").value = "";
}
