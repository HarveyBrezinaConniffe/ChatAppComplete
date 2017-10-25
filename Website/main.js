var name = prompt("Whats your name?");
var socket = io();

socket.on("message", function(data) {
	addMessage(data.from+": "+data.text);
});

socket.emit("foundname", { called: name });

socket.on("newuser", function(data) {
	addMessage(data.called+" just joined!");
});

function OnButtonClick() {
	// Get the message the user has currently typed.
	message = document.getElementById("m").value;
	// Clear the message.
	document.getElementById("m").value = "";
	socket.emit("message", { from: name, text: message });
}


function addMessage(message) {
	var ul = document.getElementById("messages");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(message));
	ul.appendChild(li);	
}
