const toucheNumber = [...document.querySelectorAll("#number-box >div")];
console.log(toucheNumber);
const keyCode1 = toucheNumber.map((numb) => numb.dataset.key);
console.log(keyCode1);

const toucheOperator = [...document.querySelectorAll(".operation >div ")];
const keyCode2 = toucheOperator.map((op) => op.dataset.key);
console.log(toucheOperator);
console.log(keyCode2);

const toucheSpecial = [...document.querySelectorAll(".special-box >div")];
const keyCode3 = toucheSpecial.map((spc) => spc.dataset.key);
console.log(keyCode3);

const affichage = document.querySelector("#display");
document.addEventListener("keydown", (e) => {
  const valeur = e.code;
  console.log(valeur);
});
const active = document.querySelectorAll("#number-box ");
// active.addEventListener("click", (e) => {
//   console.log(active);
// });
active.forEach((item) => {
  item.addEventListener("click", (e) => {
    // const valeur = e.target.dataset.key;
    const elo = e.target;
    elo.classList.toggle("active");
    //   console.log(active);
    // console.log(valeur);
  });
  // calculer(valeur);
});

const calculer = (valeur) => {
  if (keyCode3.includes(valeur)) {
    switch (valeur) {
      case "8":
        affichage.textContent = "";
        break;
      case "13":
        const resultat = eval(affichage.textContent);
        affichage.textContent = resultat;
        break;

      default:
        null;
    }
  }
  if (keyCode1.includes(valeur)) {
    const index = keyCode1.indexOf(valeur);
    affichage.textContent += toucheNumber[index].innerHTML;
  }
  if (keyCode2.includes(valeur)) {
    const index = keyCode2.indexOf(valeur);
    affichage.textContent += toucheOperator[index].innerHTML;
  }
};
// window.addEventListener("error", (e) => {
//   alert("une erreur est survenue dans votre calcul: " + e.message);
// });
