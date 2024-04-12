const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    // Broadcast to all clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

const PORT = 3000;
const IP_ADDRESS = "80.230.158.202"; // Replace this with your computer's IP address

server.listen(PORT, IP_ADDRESS, function () {
  console.log(`Server started at ${IP_ADDRESS}:${PORT}`);
});
