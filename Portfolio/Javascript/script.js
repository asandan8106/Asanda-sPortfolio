
// Get references to the chat box and user input
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    // Display user message with user icon
    displayMessage(message, "user-message", "/images/user.png");

    // Get bot response after a short delay
    setTimeout(() => {
        const response = getBotResponse(message);
        displayMessage(response, "bot-message", "/images/chatbot.png");
    }, 500);
    userInput.value = "";
}

function displayMessage(message, className, iconSrc) {
    const messageElement = document.createElement("div");
    messageElement.className = `${className} message`;

    // Add image icon
    const iconElement = document.createElement("img");
    iconElement.src = iconSrc;
    iconElement.alt = `${className.includes("bot") ? "Bot" : "User"} Icon`;
    iconElement.classList.add("message-icon");

    // Add text message
    const textElement = document.createElement("span");
    textElement.textContent = message;

    // Append icon and text to the message element
    messageElement.appendChild(iconElement);
    messageElement.appendChild(textElement);

    // Add the message element to the chat box
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

// Function to get bot response based on user input
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("experience")) {
        return "I have recently completed an IT degree and have skills in HTML, CSS, JavaScript, SQL, C++, and Java.";
    } else if (input.includes("web development")) {
        return "Yes, I can help with web development from scratch!";
    } else if (input.includes("programming languages")) {
        return "I am proficient in HTML, CSS, JavaScript, SQL, C++, and Java.";
    } else if(input.includes("name")){
        return "I am Asanda Ngwenya,a Software Developer😊";
    }else if(input.includes("contact")){
        return "you can contact me using this email: ngwenyaasanda13@gmail.com or you can navigate to the contaxt page for more information";
    }else if(input.includes("contact")){
        return "you can contact me using this email: ngwenyaasanda13@gmail.com or you can navigate to the contaxt page for more information";
    }else {
        return "I'm here to help! Feel free to ask me anything 😊";
    }
    
}

// Function to display a FAQ question in the chat box and get a response
function displayFAQ(question) {
    displayMessage(question, "user-message", "/images/user.png");

    setTimeout(() => {
        const response = getBotResponse(question);
        displayMessage(response, "bot-message", "/images/chatbot.png");
    }, 500);
}

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
