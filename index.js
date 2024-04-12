function chat() {
  document.getElementById("chat").style.zIndex = "10";
  document.getElementById("chat").style.scale = "95%";
  document.getElementById("chat").style.opacity = "1";
  document.getElementById("chat").style.boxShadow =
    "rgba(0, 0, 0, 0.24) 0px 3px 8px";
  document.getElementById("textChat").style.width = "500px";
}
function sendMessage(value) {
  const message = document.createElement("p");
  message.innerText = value;
  document.getElementById("messages").appendChild(message);
  document.getElementById("messages").scrollTop =
    document.getElementById("messages").scrollHeight;
}
