let userScore = 0;
let compScore = 0;

function playRPS(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';
  let updatedTotal = getTotalPoints();

  if (userChoice === computerChoice) {
    result = `🤝 It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `✅ You win! ${userChoice} beats ${computerChoice}`;
    const pointsEarned = 50;
    updatedTotal = addPoints(pointsEarned);
    result += ` 🎉 (+${pointsEarned} pts)`;
    userScore++;
  } else {
    result = `❌ You lose! ${computerChoice} beats ${userChoice}`;
    const pointsLost = 20;
    updatedTotal = Math.max(0, getTotalPoints() - pointsLost);
    localStorage.setItem("totalPoints", updatedTotal);
    result += ` 🔻 (-${pointsLost} pts)`;
    compScore++;
  }

  document.getElementById("rpsResult").innerText = result;
  document.getElementById("rpsScore").innerText = `You: ${userScore} | Computer: ${compScore}`;
  document.getElementById("totalPoints").innerText = updatedTotal;
}

function resetScore() {
  userScore = 0;
  compScore = 0;
  document.getElementById('rpsResult').innerText = 'Scores reset. Make your move!';
  document.getElementById('rpsScore').innerText = `You: 0 | Computer: 0`;
}
