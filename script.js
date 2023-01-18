const panier = {
    pommes: 2,
    poires: 2,
    prunes: 2
}


// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

// Pour afficher le nombre de poires dans la facture détaillée
document.querySelector("#qtePoires").textContent = panier.poires;

// Pour afficher le nombre de prunes dans la facture détaillée
document.querySelector("#qtePrunes").textContent = panier.prunes;

//////////////////////////////////////////////////////////////////////////

//Quand on click sur le bouton, ça active la fonction qui ajoute le sac à la liste
// et qui met à jour la commande
function AjouterSacPommes() {

//On l'incrémente de 1 la qte dans la const panier.pomme
    panier.pommes = panier.pommes + 1;

//Pour afficher le nombre de pommes dans la facture détaillée
   document.querySelector("#qtePommes").textContent = panier.pommes;

   //Ajuster le poids total

    //Ajuster le prix total

}

function AjouterSacPoires() {

//On l'incrémente de 1 la qte dans la const panier.poires
    panier.pommes = panier.poires + 1;

//Pour afficher le nombre de pommes dans la facture détaillée
    document.querySelector("#qtePoires").textContent = panier.poires;

    //Ajuster le poids total

    //Ajuster le prix total

}

function AjouterSacPrunes() {

//On l'incrémente de 1 la qte dans la const panier.prunes
    panier.pommes = panier.prunes + 1;

//Pour afficher le nombre de prunes dans la facture détaillée
    document.querySelector("#qtePrunes").textContent = panier.poires;

    //Ajuster le poids total

    //Ajuster le prix total

}



/*
function AjouterSac(fruit){
    panier.fruit = panier.fruit + 1;
    document.querySelector(fruit).textContent = panier.fruit;
}*/
