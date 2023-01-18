//Constante
const panier = {
    pommes: 0,
    poires: 0,
    prunes: 0
}

const poids = {
    pommes: 10,
    poires: 12,
    prunes: 15,
}
//la constante prix est un objet avec trois propriétés : pommes, poires et prunes
const prix = {
    pommes: 13.25,
    poires: 20.00,
    prunes: 22.00,
}

//Variables
let PoidsPommes = 0;
let PoidsPoires = 0;
let PoidsPrunes = 0;

let PrixPommes = 0;
let PrixPoires = 0;
let PrixPrunes = 0;

let QteTotal = 0;
let PoidsTotal = 0;
let PrixTotal = 0;


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

    //Calculer le poids et le prix
    PoidsPommes = (poids.pommes) * (panier.pommes);
    PrixPommes = (prix.pommes) * (panier.pommes);


//Afficher la quantité de pomme dans le panier
    document.querySelector("#qtePommes").textContent = panier.pommes;

    //Afficher le poids des pommes
    document.querySelector("#poidsPommes").textContent = PoidsPommes;

    //Afficher le prix des pommes
    document.querySelector("#prixPommes").textContent = PrixPommes;


    CalculerTotal()

}

function AjouterSacPoires() {

//On l'incrémente de 1 la qte dans la const panier.poires
    panier.poires = panier.poires + 1;

    //Calculer le poids et le prix
    PoidsPoires = (poids.poires) * (panier.poires);
    PrixPoires = (prix.poires) * (panier.poires);

//Pour afficher le nombre de pommes dans la facture détaillée
    document.querySelector("#qtePoires").textContent = panier.poires;

    //Ajuster le poids des poires
    document.querySelector("#poidsPoires").textContent = PoidsPoires;

    //Ajuster le prix des poires
    document.querySelector("#prixPoires").textContent = PrixPoires;

    CalculerTotal()
}

function AjouterSacPrunes() {

//On l'incrémente de 1 la qte dans la const panier.prunes
    panier.prunes = panier.prunes + 1;

    //Calculer le poids et le prix
    PoidsPrunes = (poids.prunes) * (panier.prunes);
    PrixPrunes = (prix.prunes) * (panier.prunes);

//Pour afficher le nombre de prunes dans la facture détaillée
    document.querySelector("#qtePrunes").textContent = panier.prunes;

    //Ajuster le poids des prunes
    document.querySelector("#poidsPrunes").textContent = PoidsPrunes;

    //Ajuster le prix total des prunes
    document.querySelector("#prixPrunes").textContent = PrixPrunes;

    CalculerTotal()
}

function CalculerTotal() {

    //Calculer les quantités total
   QteTotal = panier.pommes + panier.poires + panier.prunes

    //Calculer le poids total
    PoidsTotal = PoidsPommes + PoidsPoires + PoidsPrunes;

    //Calculer le prix total
        PrixTotal = PrixPommes + PrixPoires + PrixPrunes;

//Afficher les totaux
    document.querySelector("#qteTotal").textContent = QteTotal;
    document.querySelector("#poidsTotal").textContent = PoidsTotal;
    document.querySelector("#prixTotal").textContent = PrixTotal;



    /*
    // Pour afficher le total dans la facture détaillée
            document.querySelector("#qteTotal").textContent = QteTotal;

        //Calculer le poids total
        PoidsTotal = document.getElementById("poidsPrunes").value + PoidsTotal;

//On pourrait fair une fonction qui incrémente, une fonction qui calcul le poids/prix/total
et une qui fait l'affichage




     */
}

/*
//Pour que la fonction fonctionne, il faut modifier le html et le mettre AjouterSac('Pommes')
//
function AjouterSac(fruit){
    panier.fruit = panier.fruit + 1;
    document.querySelector("#qte" + fruit).textContent = panier.fruit;

    //On peut pas envoyer la variable dans la propriété de l'objet.
}
*/