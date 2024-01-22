let btn = document.getElementById('btn');
  let output = document.getElementById('outputtext');
  let scoreDisplay = document.getElementById('score');
  let highScoreDisplay = document.getElementById('highScore');
  let score = 10;
  let highScore = 0;
  let number = Math.floor(Math.random() * 30) + 1;

  btn.addEventListener('click', function () {
    let input = parseInt(document.getElementById('userinput').value);

    if (isNaN(input) || input < 1 || input > 30) {
      output.innerHTML = 'Please enter a valid number between 1 and 30.';
    } else if (input === number) {
      output.innerHTML = `Congratulations! You guessed the right number. The number was ${number},you can guess again .`;
      updateHighScore();
    } else if (input < number) {
      output.innerHTML = `The number is greater than ${input}.`;
      decreaseScore();
    } else if (input > number) {
      output.innerHTML = `The number is less than ${input}.`;
      decreaseScore();
    }
  });

  function setMessage(message) {
    document.getElementById('message').textContent = message;
  }

  function decreaseScore() {
    score--;
    scoreDisplay.textContent = score;

    if (score === 0) {
      setMessage(`Game over! The correct number was ${number}. Try again!`);
      resetGame();
    }
  }

  function updateHighScore() {
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }

    resetGame();
  }

  function resetGame() {
    score = 10;
    scoreDisplay.textContent = score;
    number = Math.floor(Math.random() * 30) + 1;
    setMessage("Guess the number between 1 and 30:");
  }