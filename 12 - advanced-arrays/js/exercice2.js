let voiture = [
  // nom = [0,1,2]
  (nom = ["volvo", "ford", "renault"]),
  // année = [0,1,2]
  (annee = [2020, 2030, 2015]),
];

// pour récuperer le nom des voiture
console.log(voiture[0]);

// pour récuperer l'année des voitures
console.log(voiture[1]);

// pour récupérer la première marque et la première année
console.log(voiture[0][0], voiture[1][0]);
