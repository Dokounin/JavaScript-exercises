const result = document.querySelector("#cummul");
const moyenne = document.querySelector("#moyenne");
let inputVals = [];
total = 0;
let avarege;

document.querySelector("#validate").addEventListener("click", () => {
  const value = parseInt(document.querySelector("#nombre").value);
  // ajouter le valeur dans un tableau
  inputVals.push(value);
  // pour afficher le valeur rentre
  result.innerHTML = inputVals;
  // pour cummule tout les valeur rentre
  total += value;
  // pour afficher le total de valeur
  result.innerHTML = total;
  // pour avoir moyenne de tout les valeur rentre
  avarege = total / inputVals.length;
  // pour afficher le moyenne de valeur rentre
  moyenne.innerHTML = avarege;
});
