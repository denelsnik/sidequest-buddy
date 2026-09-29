```javascript
// ========================================
// SIDEQUEST BUDDY
// Interactive Invitation
// ========================================


// ========================================
// GOOGLE SHEETS TRACKING
// ========================================

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwLpWFltwVOcDLr9h8DqVZvZosf4E9snvw70979gxRkM0FDVlA__kL5nLnhQ6zLPKfOCA/exec";


// ========================================
// PLAYER
// ========================================

const guestName = "Alexandru";


// ========================================
// TRACKING DATA
// ========================================

let decision = "";
let question1Answer = "";
let question2Answer = "";
let selectedSidequest = "";


// ========================================
// INITIALIZE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const guestElement = document.getElementById("guestName");

    if (guestElement) {
        guestElement.textContent = guestName;
    }

});


// ========================================
// SCREEN HELPER
// ========================================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.add("hidden");
    });

    const targetScreen = document.getElementById(screenId);

    if (targetScreen) {
        targetScreen.classList.remove("hidden");
    }

}


// ========================================
// START QUEST
// ========================================

function acceptQuest() {

    decision = "YES";

    showScreen("yesScreen");

}


// ========================================
// DECLINE QUEST
// ========================================

function rejectQuest() {

    decision = "NO";

    showScreen("noScreen");

}


// ========================================
// TRY AGAIN
// ========================================

function resetQuest() {

    decision = "";
    question1Answer = "";
    question2Answer = "";
    selectedSidequest = "";

    showScreen("mainChoices");

}


// ========================================
// START QUIZ
// ========================================

function startQuiz() {

    showScreen("question1");

}


// ========================================
// QUESTION 1
// ========================================

function answerQuestion1(answer) {

    const feedback =
        document.getElementById("question1Feedback");

    question1Answer =
        answer ? "C" : "INCORRECT";


    if (answer) {

        feedback.textContent =
            "> CORRECT. Proceeding...";

        feedback.className =
            "quiz-feedback correct";

        setTimeout(function () {

            showScreen("question2");

        }, 700);

    } else {

        feedback.textContent =
            "> INCORRECT. Try again, genius.";

        feedback.className =
            "quiz-feedback incorrect";

    }

}


// ========================================
// QUESTION 2
// ========================================

function answerQuestion2(answer) {

    const feedback =
        document.getElementById("question2Feedback");

    question2Answer =
        answer ? "C" : "INCORRECT";


    if (answer) {

        feedback.textContent =
            "> CORRECT. Compatibility confirmed.";

        feedback.className =
            "quiz-feedback correct";

        setTimeout(function () {

            showScreen("passedScreen");

        }, 800);

    } else {

        feedback.textContent =
            "> INCORRECT. Think harder.";

        feedback.className =
            "quiz-feedback incorrect";

    }

}


// ========================================
// SHOW SIDEQUESTS
// ========================================

function showSidequests() {

    showScreen("sidequestScreen");

}


// ========================================
// CHOOSE SIDEQUEST
// ========================================

function chooseActivity(activity) {

    selectedSidequest = activity;

    const selectedActivityElement =
        document.getElementById("selectedActivity");

    if (selectedActivityElement) {
        selectedActivityElement.textContent = activity;
    }


    // Save to Google Sheets
    // ONLY after a Sidequest has been selected.
    saveResponse();


    // Show final screen immediately
    showScreen("resultScreen");

}


// ========================================
// SAVE TO GOOGLE SHEETS
// ========================================

async function saveResponse() {

    const data = {

        name: guestName,

        decision: decision,

        question1: question1Answer,

        question2: question2Answer,

        sidequest: selectedSidequest

    };


    console.log("Sending response:", data);


    try {

        await fetch(GOOGLE_SCRIPT_URL, {

            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify(data)

        });

        console.log("Response sent to Google Sheets.");

    } catch (error) {

        console.error(
            "Could not send response to Google Sheets:",
            error
        );

    }

}
```
