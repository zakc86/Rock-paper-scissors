let choices = ['rock', 'paper', 'scissors'];
var randomIndex = Math.floor(Math.random() * choices.length);
var cpuChoice = choices[randomIndex];


function pickedRock() {
  if (cpuChoice == 'rock') {
    window.alert("It's a tie!, opponent picked " + cpuChoice + ".")
  
  } else if (cpuChoice == 'paper') {
    window.alert("You lose!, opponent picked " + cpuChoice + ".")
  
  } else {
    window.alert("You win!, opponent picked " + cpuChoice + ".")
  }
}

function pickedPaper() {
  if (cpuChoice == 'paper') {
    window.alert("It's a tie!, opponent picked " + cpuChoice + ".")
  
  } else if (cpuChoice == 'scissors') {
    window.alert("You lose!, opponent picked " + cpuChoice + ".")
  
  } else {
    window.alert("You win!, opponent picked " + cpuChoice + ".")
  }
}

function pickedScissors() {
  if (cpuChoice == 'scissors') {
    window.alert("It's a tie, opponent picked " + cpuChoice + ".")
  
  } else if (cpuChoice == 'rock') {
    window.alert("You lose!, opponent picked " + cpuChoice + ".")
  
  } else {
    window.alert("You win!, opponent picked " + cpuChoice + ".")
  }
}

