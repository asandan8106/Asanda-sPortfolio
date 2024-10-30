
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Function to send the user's message
function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return; 

    // Display user message in chat box
    displayMessage(message, "user-message");

    // Get bot response based on the message
    const response = getBotResponse(message);
    displayMessage(response, "bot-message");

    // Clear input field
    userInput.value = "";
}

// Function to display message in chat box
function displayMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to bottom of chat box
}

// Function to display FAQ question as user message
function displayFAQ(question) {
    displayMessage(question, "user-message");
    const botResponse = getBotResponse(question);
    displayMessage(botResponse, "bot-message");
}

// Function to get bot response based on user input
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("experience")) {
        return "I have recently completed an IT degree and have skills in HTML, CSS, JavaScript, SQL, C++, and Java.";
    } else if (input.includes("web development")) {
        return "Yes, I can help with web development from scratch, including front-end and back-end development.";
    } else if (input.includes("programming languages")) {
        return "I am proficient in HTML, CSS, JavaScript, SQL, C++, and Java.";
    } else if (input.includes("projects")) {
        return "I have worked on several projects including websites and applications using various technologies.";
    } else if (input.includes("contact")) {
        return "You can contact me through the contact page on my portfolio or via email at example@example.com.";
    } else if (input.includes("services")) {
        return "I offer web development services, database management, and software solutions.";
    } else {
        return "I'm sorry, I didn't understand that. Could you please rephrase or ask something else?";
    }
}

// Event listener for pressing "Enter" key to send message
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
