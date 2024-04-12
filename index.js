// Establish WebSocket connection
const socket = new WebSocket('ws://your_server_ip:3000');

// Function to send messages to the server
function sendMessage(value) {
  // Check if WebSocket connection is open
  if (socket.readyState === WebSocket.OPEN) {
    // Send the message to the server
    socket.send(value);
  } else {
    console.error('WebSocket connection is not open.');
  }
}

// Function to handle incoming messages from the server
socket.onmessage = function(event) {
  const message = event.data; // Message received from the server
  // Display the message in the chat UI
  const messageElement = document.createElement("p");
  messageElement.innerText = message;
  document.getElementById("messages").appendChild(messageElement);
  // Scroll to the bottom of the chat window
  document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
};

// Function to handle chat UI interactions
function chat() {
  document.getElementById("chat").style.zIndex = "10";
  document.getElementById("chat").style.scale = "95%";
  document.getElementById("chat").style.opacity = "1";
  document.getElementById("chat").style.boxShadow =
    "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  document.getElementById("textChat").style.width = "500px";
}

// Event listener to send message when Enter key is pressed
document.getElementById("textChat").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // 13 is the key code for Enter
    const messageValue = event.target.value;
    if (messageValue.trim() !== "") { // Check if message is not empty
      sendMessage(messageValue); // Send the message
      event.target.value = ""; // Clear the input field
    }
  }
});
