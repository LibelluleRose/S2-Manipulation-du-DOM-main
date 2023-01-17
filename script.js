const panier = {
    pommes : 2,
    poires : 0,
    prunes : 0
}


// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

//////////////////////////////////////////////////////////////////////////


/*//Initialisation des variables
let NbrSacPommes = 0;
let NbrSacPoires = 0;
let NbrSacPrunes = 0;*/


//Quand on click sur le bouton, sa active la fonction qui ajoute le sac à la liste
// et qui met à jour la commande
function AjouterSacPommes(){


    //On va chercher les valeurs du tableau de facture et on les mets dans des variable
let qtePommes = document.getElementById("qtePommes").value;
let poidsPommes = document.getElementById("poidsPommes").value;
let prixPommes = document.getElementById("prixPommes").value;

//On l'incrémente de 1 chaque nouvelle variable
    qtePommes = qtePommes + 1;
    poidsPommes = poidsPommes + 1;
    prixPommes = prixPommes + 1;
}

function CalculerTotal


/*Création des fonctions pour l'achat
mettre à jour la facture
lier les fonctions avec les boutons correspondant
 */