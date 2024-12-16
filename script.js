const playerDisplay = document.getElementById("playerDisplay");
const pcDisplay = document.getElementById("pcDisplay");
const divBtns = document.getElementById("divBtns");
let chosenBtn;

function handleChosenButton(event) {
  event.preventDefault();
  let button = event.target;
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
      console.log("Merci de choisir un bouton");
  }
  playerDisplay.innerHTML = `<img src="${imgSrc}" alt="${chosenBtn}">`;
  console.log("bouton choisi : " + chosenBtn);
  randomChoice(arrButtonsChoice);
}

//appel d'une autre fonction qd bouton cliqué, qui fais le choix de l'ordi.
const buttonsChoice = divBtns.querySelectorAll(".button-choice");
const arrButtonsChoice = Array.from(buttonsChoice);
arrButtonsChoice.forEach((button) => {
  button.addEventListener("click", handleChosenButton);
});

function randomChoice(arrButtonsChoice) {
  let resultGame = document.getElementById("result");
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
    default:
      console.log("Merci de choisir un bouton");
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
