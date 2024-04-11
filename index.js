const formulaire = document.getElementById("exm");
const listeDonnees = document.getElementById("liste_donnees");

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  // Récupérer les valeurs des champs du formulaire
  const tache = document.getElementById("tache").value;

  const date_echeance = document.getElementById("date_echeance").value;
  const priorite = document.getElementById("priorite").value;
  
  // Créer un nouvel élément de liste
  const elementListe = document.createElement("div");
  // Ajouter l'élément de liste à la liste
  listeDonnees.appendChild(elementListe);

  // Ajouter le titre (tache) à l'élément de liste
  const h4 = document.createElement('h4');
  h4.innerText = tache;
  elementListe.appendChild(h4);
  elementListe.style.margin = "1%";
  elementListe.style.justifyContent = "space-around";
  elementListe.style.alignItems = "center";
  elementListe.classList.add("avantTerminer")

  // Ajouter la date à l'élément de liste
  const bouton = document.createElement('span');
  bouton.innerText = date_echeance;
  bouton.style.borderRadius = "30px";
  bouton.style.borderColor = "black";
  bouton.style.borderWidth = "1%";
  bouton.style.padding = "1%";
  elementListe.appendChild(bouton);

  // Ajouter la priorité à l'élément de liste
  const span = document.createElement('span');
  span.innerText = priorite;
  span.style.color = "black";
  span.style.backgroundcolor = "white";
  span.style.borderRadius = "30px";
  span.style.borderWidth = "0,5%";
  span.style.padding = "1%";
  elementListe.appendChild(span);

  //Style de liste donnees
  listeDonnees.style.display = "flex";
  listeDonnees.style.flexDirection = "column";

const boutonSupprimer = document.createElement("button");
boutonSupprimer.innerText = "Supprimer";
boutonSupprimer.style.borderRadius = "30px";
boutonSupprimer.style.borderStyle = "solid";
boutonSupprimer.style.borderColor = "black";
boutonSupprimer.style.borderWidth = "1%";
boutonSupprimer.style.padding = "1%";
boutonSupprimer.classList.add("boutonSupprimer");


elementListe.appendChild(boutonSupprimer);

boutonSupprimer.addEventListener("click", () => {
  // Supprimer l'élément de liste
  elementListe.parentNode.removeChild(elementListe);
});

   // Vider les champs du formulaire
   formulaire.reset();
   
  
// Créer un bouton "Terminer"
const boutonTerminer = document.createElement("button");
boutonTerminer.innerText = "Terminer";
boutonTerminer.style.borderRadius = "30px";
boutonTerminer.style.borderStyle = "solid";
boutonTerminer.style.borderColor = "black";
boutonTerminer.style.borderWidth = "1%";
boutonTerminer.style.padding = "1%";
boutonTerminer.classList.add("boutonTerminer");

// Ajouter le bouton à l'élément de liste
elementListe.appendChild(boutonTerminer);

boutonTerminer.addEventListener("click", () => {
  // Cocher la tâche comme terminée
  elementListe.classList.add("terminee");

  // Désactiver le bouton "Terminer"
  boutonTerminer.disabled = true;
});

});

const submitButton = document.querySelector('button[type="submit"]');
const section_1 = document.querySelector(".section_1");

submitButton.addEventListener("click", function() {
  // Définir l'image de fond
  section_1.style.backgroundImage = "url('5xOZ.GIF')";
  section_1.style.backgroundSize= "cover"

  // Définir un délai pour la disparition de l'image
  setTimeout(function() {
    section_1.style.backgroundImage = "";
  }, 1000); // 1 secondes de délai, ajustez selon vos besoins
});














