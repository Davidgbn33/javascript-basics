for (i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    let boxPlayer1 = parseInt(prompt(" Player 1 :quel case veux tu jouer ?"));
    jouerTour(boxPlayer1, "X");
  } else {
    let boxPlayer2 = parseInt(prompt(" Player 2 :quel case veux tu jouer ?"));
    jouerTour(boxPlayer2, "O");
  }
}

function jouerTour(numeroCase, symbole) {
  let caseElement = document.querySelector("#box" + numeroCase);
  if (caseElement.textContent === "") {
    caseElement.textContent = symbole;
  } else {
    alert("La case est déjà occupée. Choisissez une autre case.");
    // Réduire le tour pour permettre au même joueur de rejouer
    i--;
  }
}
