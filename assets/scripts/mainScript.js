function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("myMain").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myMain").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

// Chat Messages
function sendMessage() {
    const usernameInput = document.getElementById("usernameInput");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    // Get the username
    const username = usernameInput.value || "Anonymous"; // Default to "Anonymous" if no username is provided

    // Create a new message element
    const messageElement = document.createElement("p");
    messageElement.textContent = `${username}: ${chatInput.value}`; // Include the username in the message
    chatMessages.appendChild(messageElement);

    // Clear the input fields
    chatInput.value = "";
    usernameInput.value = ""; // Optionally clear the username input

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Here you would typically send the message to your server
    // and handle replies from the server.
}
