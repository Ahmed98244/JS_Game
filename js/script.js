// set variables 
let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById('user-score');
let compScoreSpan = document.getElementById('comp-score');
const scoreBord = document.querySelector('.score-bord');
const result = document.querySelector('.result p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');

// functions  

// get computer choice function 
function getCopmChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];

}

// convert letters to word 
function convertToWord(letter) {
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  return "Scissors";
}
// win function  
function win(userChoice, compChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = computerScore;
  result.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(compChoice) + ". You Win! ";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('green-glow');
  }, 400)
}

// loss function  
function loss(userChoice, compChoice) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = computerScore;
  result.innerHTML = convertToWord(compChoice)  + " beats " + convertToWord(userChoice) + ". You Loss! ";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('red-glow');
  }, 400)

}
// draw function  
function draw(userChoice, compChoice) {
  result.innerHTML = convertToWord(compChoice)  + " equals " + convertToWord(userChoice) + ". It's a draw ";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove('gray-glow');
  }, 400)
}

// game function 
function game(userChoice) {
  const compChoice = getCopmChoice();

  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp": 
    case "ps": 
    case "sr":
      loss(userChoice, compChoice);
      break;
    case "rr": 
    case "pp": 
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

// main function 
function main() {
  rock.addEventListener('click', function() {
    game('r');
  });
  paper.addEventListener('click', function() {
    game('p');
  });
  scissor.addEventListener('click', function() {
    game('s');
  });
}
main();