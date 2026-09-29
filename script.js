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

document.getElementById("guestName").textContent = guestName;


// ========================================
// TRACKING DATA
// ========================================

let decision = "";
let question1Answer = "";
let question2Answer = "";
let selectedSidequest = "";


// ========================================
// SCREEN HELPER
// ========================================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    document
        .getElementById(screenId)
        .classList.remove("hidden");
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

function answerQuestion1(correct) {

    const feedback =
        document.getElementById("question1Feedback");


    // Store the answer
    question1Answer = correct
        ? "CORRECT"
        : "INCORRECT";


    if (correct) {

        feedback.textContent =
            "> CORRECT. Proceeding...";

        feedback.className =
            "quiz-feedback correct";

        setTimeout(() => {

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

function answerQuestion2(correct) {

    const feedback =
        document.getElementById("question2Feedback");


    // Store the answer
    question2Answer = correct
        ? "CORRECT"
        : "INCORRECT";


    if (correct) {

        feedback.textContent =
            "> CORRECT. Compatibility confirmed.";

        feedback.className =
            "quiz-feedback correct";

        setTimeout(() => {

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

    document.getElementById(
        "selectedActivity"
    ).textContent = activity;

    // Save everything only now
    // when a Sidequest has actually been selected.
    saveResponse();

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


    try {

        await fetch(GOOGLE_SCRIPT_URL, {

            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type": "text/plain"
            },

            body: JSON.stringify(data)

        });

        console.log(
            "Sidequest response saved."
        );

    } catch (error) {

        console.error(
            "Could not save response:",
            error
        );

    }

}
```
