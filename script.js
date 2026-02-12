function sendMessage() {
    let inputBox = document.getElementById("userInput");
    let chatbox = document.getElementById("chatbox");
    let input = inputBox.value.trim();

    if (input === "") return;

    // Show user message
    chatbox.innerHTML += "<div class='user'>You: " + input + "</div>";

    let reply = "";
    let text = input.toLowerCase();

    // Q/A Logic
    if (text.includes("hello") || text.includes("hi")) {
        reply = "Hello! Kaise help karu? 😊";
    }
    else if (text.includes("bca")) {
        reply = "BCA ek 3 saal ka computer course hai.";
    }
    else if (text.includes("exam")) {
        reply = "Exam date notice board par check karein.";
    }
    else if (text.includes("timing")) {
        reply = "College timing 8 AM se 1 PM hai.";
    }
    else if (text.includes("what is my name")) {
        reply = "Aap ka name Om Singh hai 😊";
    }
    else if (text.includes("fees")) {
        reply = "Fees per year approx 40–45k hoti hai Maharaja College me.";
    }
    else if (text.includes("syllabus")) {
        reply = "Syllabus college website par available hai.";
    }
    else if (text.includes("holiday")) {
        reply = "Holiday list notice board par check karein.";
    }
    else if (text.includes("principal")) {
        reply = "Principal ka naam college website par mil jayega.";
    }
    else if (text.includes("course")) {
        reply = "Hamare college me BCA, BBA aur BA courses available hain.";
    }
    else if (text.includes("attendance")) {
        reply = "75% attendance compulsory hoti hai exam dene ke liye.";
    }
    else if (text.includes("scholarship")) {
        reply = "Government scholarship eligible students ko milti hai.";
    }
    else {
        reply = "Main abhi learning phase me hu. Simple questions puchiye 😊";
    }

    // Typing animation
    chatbox.innerHTML += "<div class='bot' id='typing'>Bot is typing...</div>";
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        let typing = document.getElementById("typing");
        if (typing) typing.remove();

        chatbox.innerHTML += "<div class='bot'>Bot: " + reply + "</div>";
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 800);

    inputBox.value = "";
}

//
// 🎤 Voice Input
//
function startVoice() {

    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice feature Chrome me hi chalega");
        return;
    }

    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-IN";

    recognition.onresult = function(event) {
        let voiceText = event.results[0][0].transcript;
        document.getElementById("userInput").value = voiceText;
        sendMessage();
    };

    recognition.start();
}

//
// ⚡ Quick Button Ask
//
function ask(text) {
    document.getElementById("userInput").value = text;
    sendMessage();
}

//
// 🌙 Dark Mode
//
function toggleDark() {
    document.body.classList.toggle("dark");
}

//
// 🗑 Clear Chat
//
function clearChat() {
    document.getElementById("chatbox").innerHTML = "";
}

//
// ⌨️ Enter Key Send
//
document.getElementById("userInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
