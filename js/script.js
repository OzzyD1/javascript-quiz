//Author: Osvaldas Domarkas - 20068200

let username = null;

const questions = [
    { text: "What disease commonly spread on pirate ships?", answer: "scurvy" },
    { text: "Who was the Ancient Greek God of the Sun?", answer: "apollo" },
    { text: "What was the name of the crime boss who was head of the feared Chicago Outfit?", answer: "al capone" },
    { text: "How many elements are in the periodic table?", answer: "118" },
    { text: "How many faces does a Dodecahedron have?", answer: "12" },
    { text: "What is the square root of 9?", answer: String(Math.sqrt(9)) },
];

let correct = 0;
const d = new Date();

// UI Modal Prompt
document.getElementById("signUpButton").addEventListener("click", () => {
    $('.ui.modal').modal('show');
    document.getElementById("date").innerHTML = d;
})

// Stores Username
document.getElementById("signUpContinue").addEventListener("click", () => {
    username = document.getElementById("usernameInput").value.toLowerCase();

    // Input Validation
    if(username === "" || username.length < 6) {
        alert('Invalid Username'); 
    } else {
        document.getElementById("landingPage").style.display = "none";
        document.getElementById("quizStartPage").style.display = "block";
        document.getElementById("welcomeMessage").innerHTML = `Hello ${username.toUpperCase()}`;
    }
});

// Start Quiz
document.getElementById("startQuizButton").addEventListener("click", () => {
    questions.forEach(question => {
        const answer = prompt(question.text);
        if(answer.toLowerCase() === question.answer) {
            alert('Correct!');
            correct += 1;
        } else {
            alert(`Wrong! Correct answer is: ${question.answer}`);
        }
    });

    //End Quiz Page Shown
    document.getElementById("quizStartPage").style.display = "none";
    document.getElementById("quizEndPage").style.display = "block";
    document.getElementById("result").innerHTML = `Congrats ${username.toUpperCase()}, You have got ${correct} answers out of ${questions.length} correct!`;

    // Gives Rank
    if (correct == 5 || correct == 6){
        document.getElementById("rank").innerHTML = "Gold Crown";
    } else if (correct == 3 || correct == 4) {
        document.getElementById("rank").innerHTML = "Silver Crown";
    } else if (correct == 2 || correct == 1){
        document.getElementById("rank").innerHTML = "Bronze Crown";
    } else {
        document.getElementById("rank").innerHTML = "No Crown";
    }
});

// Start Quiz Again
document.getElementById("tryAgain").addEventListener("click", () => {
    document.getElementById("quizEndPage").style.display = "none";
    document.getElementById("quizStartPage").style.display = "block";
    correct = 0;
});