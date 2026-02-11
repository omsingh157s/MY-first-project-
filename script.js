function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (input.trim() === "") return;

    chatbox.innerHTML += "<div class='user'>You: " + input + "</div>";

    let reply = "";
    input = input.toLowerCase();

    if (input.includes("hello")) {
        reply = "Hello! Kaise help karu? 😊";
    }
    else if (input.includes("bca")) {
        reply = "BCA ek 3 saal ka computer course hai.";
    }
    else if (input.includes("exam")) {
        reply = "Exam date notice board par check karein.";
    }
    else if (input.includes("timing")) {
        reply = "College timing 8 AM se 1 PM hai.";
    }
    else if (input.includes("what is my name")) {
        reply = "app ka name Om Singh hai 😊";
    }
    else if (input.includes("fees")) {
        reply = "Fees details Per year ke 40 to 45 hai aap ke collage university of Maharaja collage ke .";
    }
    else if (input.includes("syllabus")) {
        reply = "Syllabus college website par available hai.";
    }
    else if (input.includes("holiday")) {
        reply = "Holiday list notice board par check karein.";
    }
    else if (input.includes("principal")) {
        reply = "Principal ka naam college website par mil jayega.";
    }
    else if (input.includes("course")) {
        reply = "Hamare college me BCA, BBA aur BA courses available hain.";
    }
         else if (input.includes("attendance")) {
      reply = ""75 % attendance compulsory hoti hai exam dene ke liye.";
    }
    else {
        reply = "Main abhi learning phase me hu. Simple questions puchiye 😊";
    }

    // Typing animation
    chatbox.innerHTML += "<div class='bot' id='typing'>Bot is typing...</div>";

    setTimeout(() => {
        document.getElementById("typing").remove();
        chatbox.innerHTML += "<div class='bot'>Bot: " + reply + "</div>";
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 800);

    document.getElementById("userInput").value = "";
}

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

// Enter key se message send
document.getElementById("userInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

