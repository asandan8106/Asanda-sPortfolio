const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Function to send a message
function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    displayMessage(message, "user-message", "fas fa-user");

    setTimeout(() => {
        const response = getBotResponse(message);
        displayMessage(response, "bot-message", "fas fa-robot");
    }, 500);

    userInput.value = "";
}

// Function to display a message
function displayMessage(message, className, iconClass) {
    const messageElement = document.createElement("div");
    messageElement.className = `${className} message`;

    const iconElement = document.createElement("i");
    iconElement.className = iconClass;

    const textElement = document.createElement("span");
    textElement.textContent = message;

    messageElement.appendChild(iconElement);
    messageElement.appendChild(textElement);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get bot response
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("experience")) {
        return "I have recently completed an IT degree and have skills in HTML, CSS, JavaScript, SQL, C++, and Java.";
    } else if (input.includes("web development")) {
        return "Yes, I can help with web development from scratch!";
    } else if (input.includes("programming languages")) {
        return "I am proficient in HTML, CSS, JavaScript, SQL, Python, COBI C++, and Java.";
    } else if (input.includes("name")) {
        return "I am Asanda Ngwenya, a Software Developer 😊";
    } else if (input.includes("contact")) {
        return "You can contact me at ngwenyaasanda13@gmail.com.";
    } else {
        return "I'm here to help! Feel free to ask me anything 😊";
    }
}

// Function to display FAQ questions
function displayFAQ(question) {
    displayMessage(question, "user-message", "fas fa-user");
    setTimeout(() => {
        const response = getBotResponse(question);
        displayMessage(response, "bot-message", "fas fa-robot");
    }, 500);
}

// Function to clear all messages
function clearMessages() {
    chatBox.innerHTML = "";
}

// Send message on Enter key press
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
