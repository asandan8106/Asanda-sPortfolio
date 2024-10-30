const chatBox = document.getElementById("chat-box");

// Function to handle Enter key press
function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to send message
function sendMessage() {
    const userInput = document.getElementById("user-input").value;

    if (userInput.trim() === "") return;

    // Display user message
    displayMessage(userInput, "user-message");

    // Get chatbot response
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, "bot-message");

    document.getElementById("user-input").value = "";
}

// Function to display a message in the chat box
function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate chatbot response
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("Qualifications")) {
        return " The qualifications that i possess is Bachelor of science in information Technolog";
    } else if (input.includes("contact") || input.includes("support")) {
        return "You can contact support ngwenyaasanda13@gmail.com or call us at +123-456-7890.";
    } else if (input.includes("location")) {
        return "I'm Located at ";
    } else if (input.includes("name")) {
        return "You can change your name in the settings.";
    } else {
        return "I'm sorry, I didn't understand that. Please ask something else or check the FAQs.";
    }
}

// Function to handle FAQ clicks
function displayFAQ(question) {
    displayMessage(question, "user-message");
    const botResponse = getBotResponse(question);
    displayMessage(botResponse, "bot-message");
}
