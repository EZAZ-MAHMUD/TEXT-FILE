script.js
// স্কোর আপডেট করার মেইন ফাংশন
function updateManualScore() {
    // ইউজার থেকে নতুন স্কোর ইনপুট নেওয়া
    let team1Score = prompt("প্রথম দলের নতুন স্কোর লিখুন (যেমন: 120/2):");
    let team2Score = prompt("দ্বিতীয় দলের নতুন স্কোর লিখুন (যেমন: Yet to Bat):");
    let matchStatus = prompt("ম্যাচ স্ট্যাটাস লিখুন (যেমন: Team A needs 20 runs to win):");

    // এইচটিএমএল আইডি অনুযায়ী ডাটা পরিবর্তন করা
    if (team1Score !== null)
function updateManualScore() {
    let score1 = prompt("দয়া করে প্রথম দলের স্কোর দিন (যেমন: ১০০/২):");
    if (score1 != null) {
        document.getElementById("team-1-score").innerText = score1;
    }
}


const matchData = {
    title: "Chem vs ENG, Final",
    team1: "Chemistry",
    team2: "English",
    score1: "0/0 (0.0)",
    score2: "0/0 (0.0)",
    status: "Chemistry needs 0 runs to win"
};

function displayScore(data) {
    document.getElementById('match-title').innerText = data.title;
    document.getElementById('team-1-name').innerText = data.team1;
    document.getElementById('team-2-name').innerText = data.team2;
    document.getElementById('team-1-score').innerText = data.score1;
    document.getElementById('team-2-score').innerText = data.score2;
    document.getElementById('match-status').innerText = data.status;
}

// পেজ লোড হলে স্কোর দেখাবে
window.onload = () => displayScore(matchData);

// ম্যানুয়াল আপডেট ফাংশন
function updateManualScore() {
    alert("Fetching latest scores from server...");
    // এখানে fetch() ব্যবহার করে আপনার ব্যাকএন্ড থেকে ডাটা আনতে হবে
}
