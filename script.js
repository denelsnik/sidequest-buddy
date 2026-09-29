// ========================================
// SIDEQUEST BUDDY
// Interaktive Einladung
// ========================================


// Namen aus der URL auslesen
const params = new URLSearchParams(window.location.search);

const guestName = params.get("name") || "Sidequest-Buddy";


// Namen auf der Seite anzeigen
document.getElementById("guestName").textContent = guestName;


// ========================================
// JA - QUEST ANNEHMEN
// ========================================

function acceptQuest() {

    document
        .getElementById("mainChoices")
        .classList.add("hidden");

    document
        .getElementById("yesScreen")
        .classList.remove("hidden");

}


// ========================================
// NEIN - QUEST ABLEHNEN
// ========================================

function rejectQuest() {

    document
        .getElementById("mainChoices")
        .classList.add("hidden");

    document
        .getElementById("noScreen")
        .classList.remove("hidden");

}


// ========================================
// NOCHMAL ÜBERLEGEN
// ========================================

function resetQuest() {

    document
        .getElementById("noScreen")
        .classList.add("hidden");

    document
        .getElementById("mainChoices")
        .classList.remove("hidden");

}


// ========================================
// SIDEQUEST AUSWÄHLEN
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
