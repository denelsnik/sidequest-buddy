```javascript
// ========================================
// SIDEQUEST BUDDY
// ========================================

"use strict";


// ========================================
// PLAYER
// ========================================

const guestName = "Alexandru";


// ========================================
// GAME DATA
// ========================================

let decision = "";
let question1Answer = "";
let question2Answer = "";
let selectedSidequest = "";


// ========================================
// START
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("SIDEQUEST SCRIPT LOADED");

    const guestElement = document.getElementById("guestName");

    if (guestElement) {
        guestElement.textContent = guestName;
    }


    // ====================================
    // MAIN BUTTONS
    // ====================================

    document
        .getElementById("acceptButton")
        .addEventListener("click", acceptQuest);

    document
        .getElementById("declineButton")
        .addEventListener("click", rejectQuest);

    document
        .getElementById("retryButton")
        .addEventListener("click", resetQuest);

    document
        .getElementById("beginTestButton")
        .addEventListener("click", startQuiz);

    document
        .getElementById("sidequestsButton")
        .addEventListener("click", showSidequests);


    // ====================================
    // QUESTION 1
    // ====================================

    const question1Buttons =
        document.querySelectorAll("#question1 .quiz-options button");

    question1Buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const isCorrect =
                button.dataset.answer === "correct";

            answerQuestion1(isCorrect);

        });

    });


    // ====================================
    // QUESTION 2
    // ====================================

    const question2Buttons =
        document.querySelectorAll("#question2 .quiz-options button");

    question2Buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const isCorrect =
                button.dataset.answer === "correct";

            answerQuestion2(isCorrect);

        });

    });


    // ====================================
    // SIDEQUESTS
    // ====================================

    const sidequestButtons =
        document.querySelectorAll(".sidequest-card");

    sidequestButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const activity =
                button.dataset.sidequest;

            chooseActivity(activity);

        });

    });

});


// ========================================
// SCREEN HELPER
// ========================================

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.add("hidden");
    });


    const target =
        document.getElementById(screenId);

    if (target) {
        target.classList.remove("hidden");
    }

}


// ========================================
// ACCEPT
// ========================================

function acceptQuest() {

    decision = "YES";

    showScreen("yesScreen");

}


// ========================================
// DECLINE
// ========================================

function rejectQuest() {

    decision = "NO";

    showScreen("noScreen");

}


// ========================================
// RETRY
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

function answerQuestion1(isCorrect) {

    const feedback =
        document.getElementById("question1Feedback");


    if (isCorrect) {

        question1Answer = "C";

        feedback.textContent =
            "> CORRECT. Proceeding...";

        feedback.className =
            "quiz-feedback correct";


        setTimeout(function () {

            showScreen("question2");

        }, 700);


    } else {

        question1Answer = "INCORRECT";

        feedback.textContent =
            "> INCORRECT. Try again, genius.";

        feedback.className =
            "quiz-feedback incorrect";

    }

}


// ========================================
// QUESTION 2
// ========================================

function answerQuestion2(isCorrect) {

    const feedback =
        document.getElementById("question2Feedback");


    if (isCorrect) {

        question2Answer = "C";

        feedback.textContent =
            "> CORRECT. Compatibility confirmed.";

        feedback.className =
            "quiz-feedback correct";


        setTimeout(function () {

            showScreen("passedScreen");

        }, 800);


    } else {

        question2Answer = "INCORRECT";

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
// SELECT SIDEQUEST
// ========================================

function chooseActivity(activity) {

    selectedSidequest = activity;


    const selectedElement =
        document.getElementById("selectedActivity");


    if (selectedElement) {

        selectedElement.textContent =
            selectedSidequest;

    }


    showScreen("resultScreen");

}
```
