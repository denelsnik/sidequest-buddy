// ========================================
// SIDEQUEST BUDDY
// Interactive Invitation
// ========================================


// Guest name
const guestName = "Alexandru";


// Display guest name
document.getElementById("guestName").textContent = guestName;


// Keep track of the current question
let currentQuestion = 1;


// ========================================
// START QUIZ
// ========================================

function startQuiz() {

    document
        .getElementById("mainChoices")
        .classList.add("hidden");

    document
        .getElementById("quizOne")
        .classList.remove("hidden");
}


// ========================================
// CORRECT ANSWER
// ========================================

function correctAnswer(question) {

    if (question === 1) {

        document
            .getElementById("quizOne")
            .classList.add("hidden");

        document
            .getElementById("quizTwo")
            .classList.remove("hidden");

        currentQuestion = 2;

    } else if (question === 2) {

        document
            .getElementById("quizTwo")
            .classList.add("hidden");

        document
            .getElementById("yesScreen")
            .classList.remove("hidden");
    }
}


// ========================================
// WRONG ANSWER
// ========================================

function wrongAnswer(question) {

    currentQuestion = question;

    document
        .getElementById("quizOne")
        .classList.add("hidden");

    document
        .getElementById("quizTwo")
        .classList.add("hidden");

    document
        .getElementById("wrongScreen")
        .classList.remove("hidden");
}


// ========================================
// TRY AGAIN
// ========================================

function retryQuestion() {

    document
        .getElementById("wrongScreen")
        .classList.add("hidden");

    if (currentQuestion === 1) {

        document
            .getElementById("quizOne")
            .classList.remove("hidden");

    } else {

        document
            .getElementById("quizTwo")
            .classList.remove("hidden");
    }
}


// ========================================
// CHOOSE SIDEQUEST
// ========================================

function chooseActivity(activity) {

    document
        .getElementById("yesScreen")
        .classList.add("hidden");

    document
        .getElementById("selectedActivity")
        .textContent = activity;

    document
        .getElementById("resultScreen")
        .classList.remove("hidden");
}
