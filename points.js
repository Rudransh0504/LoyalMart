// sparkathon/points.js

// Get total points from localStorage
function getTotalPoints() {
    return parseInt(localStorage.getItem("totalPoints")) || 0;
}

// Add points and update storage
function addPoints(amount) {
    const current = getTotalPoints();
    const updated = current + amount;
    localStorage.setItem("totalPoints", updated);
    return updated;
}

// Reset points (if needed)
function resetPoints() {
    localStorage.setItem("totalPoints", "0");
}
