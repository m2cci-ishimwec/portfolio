class Calculatrice {
  constructor(operandePrecedente, operandeActuelle) {
    this.operandePrecedente = operandePrecedente;
    this.operandeActuelle = operandeActuelle;
    this.effacer();
  }

  effacer() {
    this.operandeActuelle = "";
    this.operandePrecedente = "";
    this.operation = undefined;
  }
}

const bouton_chiffres = document.querySelectorAll("[data-chiffre]");
const bouton_operations = document.querySelectorAll("[data-operation]");
const bouton_egal = document.querySelector("[data-egal]");
const bouton_supprimer = document.querySelector("[data-supprimer]");
const bouton_toutNettoyer = document.querySelector("[data-effacer]");
const operandePrecedente = document.querySelector("[data-operandePrecedente]");
const operandeActuelle = document.querySelector("[data-operandeActuelle]");

const calculatrice = new Calculatrice(operandePrecedente, operandeActuelle);

bouton_chiffres.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    calculatrice.appendNumber(bouton.innerText);
  });
});
