const gameArea = document.querySelector(".gameArea");
const playerDisplay = document.getElementById("playerDisplay");
const pcDisplay = document.getElementById("pcDisplay");
const divBtns = document.getElementById("divBtns");
let resultGame = document.getElementById("result");
const startButtonArea = document.getElementById("startButtonArea");
const restartButton = document.getElementById("restartButton");
let chosenBtn;
let timerInterval;

//appel d'une autre fonction qd bouton cliqué, qui fait le choix de l'ordi.
const buttonsChoice = divBtns.querySelectorAll(".button-choice");
const arrButtonsChoice = Array.from(buttonsChoice);
arrButtonsChoice.forEach((button) => {
  button.addEventListener("click", handleChosenButton);
});

function randomChoice(arrButtonsChoice) {
  let random = Math.floor(Math.random() * arrButtonsChoice.length);
  let value = arrButtonsChoice[random];
  console.log("value btn ordi : " + value.id);
  console.log(value.id);
  let imgSrc;
  switch (value.id) {
    case "btnPierre":
      imgSrc = "assets/pierres.png";
      break;
    case "btnPapier":
      imgSrc = "assets/papier.png";
      break;
    case "btnCiseaux":
      imgSrc = "assets/ciseaux.png";
      break;
  }
  pcDisplay.innerHTML = `<img src="${imgSrc}" alt="${chosenBtn}">`;
  result(value, chosenBtn, resultGame);
}

function result(value, chosenBtn, resultGame) {
  if (value.id === "btnPierre") {
    switch (chosenBtn) {
      case "btnPierre":
        resultGame.innerHTML = "Egalité";
        break;
      case "btnPapier":
        resultGame.innerHTML = "Gagné";
        break;
      case "btnCiseaux":
        resultGame.innerHTML = "Perdu";
        break;
    }
  }
  if (value.id === "btnPapier") {
    switch (chosenBtn) {
      case "btnPierre":
        resultGame.innerHTML = "Perdu";
        break;
      case "btnPapier":
        resultGame.innerHTML = "Egalité";
        break;
      case "btnCiseaux":
        resultGame.innerHTML = "Gagné";
        break;
    }
  }
  if (value.id === "btnCiseaux") {
    switch (chosenBtn) {
      case "btnPierre":
        resultGame.innerHTML = "Gagné";
        break;
      case "btnPapier":
        resultGame.innerHTML = "Perdu";
        break;
      case "btnCiseaux":
        resultGame.innerHTML = "Egalité";
        break;
    }
  }
}

function handleChosenButton(event) {
  clearInterval(timerInterval);
  if (!event) {
    return;
  }
  let button = event.target;
  // if ()
  chosenBtn = button.id;
  let imgSrc;
  switch (chosenBtn) {
    case "btnPierre":
      imgSrc = "assets/pierres.png";
      break;
    case "btnPapier":
      imgSrc = "assets/papier.png";
      break;
    case "btnCiseaux":
      imgSrc = "assets/ciseaux.png";
      break;
    default:
      imgSrc = "assets/interrogation.png";
      playerDisplay.innerHTML = "Vous n'avez rien choisi !!";
  }
  playerDisplay.innerHTML = `<img src="${imgSrc}" alt="${chosenBtn}">`;
  randomChoice(arrButtonsChoice);
  divBtns.style.display = "none";
  restartButton.style.display = "inline";
}

/*function handleTimeOut() {
  playerDisplay.innerHTML = "Vous n'avez rien choisi !";
}*/

//function minuteur
function minuteur() {
  let temps = 5;
  timerInterval = setInterval(() => {
    if (temps > 0) {
      resultGame.innerHTML = temps;
      temps--;
    } else {
      clearInterval(timerInterval);
      resultGame.innerHTML = "Temps écoulé !";
      playerDisplay.innerHTML = "Vous n'avez rien choisi";
      divBtns.style.display = "none";
      pcDisplay.innerHTML = `<img src="assets/interrogation.png" alt="point d'interrogation">`;
      restartButton.style.display = "inline";
    }
  }, 1000);
}
if (chosenBtn !== undefined || chosenBtn !== null) {
  handleChosenButton();
} else {
  console.log("aucun bouton n'a été choisi c'est con");
  playerDisplay.innerHTML = `<img src="interrogation.png" alt="img point d'interrogation">`;
}

//lancer le jeu (cliquer sur bouton start)
startButtonArea.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("le bouton start a été cliqué!");
  startButtonArea.style.display = "none";
  gameArea.style.display = "flex";
  minuteur();
});

restartButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("le bouton start a été cliqué!");
  restartButton.style.display = "none";
  gameArea.style.display = "flex";
  divBtns.style.display = "flex";
  playerDisplay.innerHTML = "Fais ton choix";
  pcDisplay.innerHTML = "...";
  resultGame.innerHTML = "";
  minuteur();
});
