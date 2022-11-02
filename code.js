let resultat;

function addition(premierNombre, deuxiemeNombre) {
    
    resultat = premierNombre + deuxiemeNombre;
    return resultat

}

function multiplication(premierNombre, deuxiemeNombre) {
    
    resultat = premierNombre * deuxiemeNombre;
    return resultat

}

function soustraction(premierNombre, deuxiemeNombre) {
    
    resultat = premierNombre - deuxiemeNombre;
    return resultat

}

function division(premierNombre, deuxiemeNombre) {
    
    resultat = premierNombre / deuxiemeNombre;
    return resultat
    
}


let choix;
let premierNombre;
let deuxiemeNombre;

do {
    choix = Number(prompt("Que shouhaitez-vous faire ?\n\n"
    + "1 - Addition\n"
    + "2 - Multiplication\n"
    + "3 - Soustraction\n"
    + "4 - Division\n"));
} while(choix == null || choix == "" || choix >= 5 || choix == 0);

alert("Vous avez choisis l'option " + choix)

do {
premierNombre   =  Number(prompt("Entrez le premier nombre :"))
deuxiemeNombre  =  Number(prompt("Entrez le deuxième nombre :"))
if (deuxiemeNombre === 0) {
    alert("Erreur : Vous ne pouvez pas diviser un nombre par 0")
} 
if (isNaN(premierNombre) || isNan(deuxiemeNombre)) {
    alert("Vous devez rentrer un nombre. (Lettres interdites)")
}
} while(premierNombre == null || premierNombre == "" || deuxiemeNombre == null || deuxiemeNombre == "")

switch (choix) {
    case 1:
        addition(premierNombre, deuxiemeNombre)
        break;
    case 2:
        multiplication(premierNombre, deuxiemeNombre);
        break;
    case 3:
        soustraction(premierNombre, deuxiemeNombre);
        break;
    case 4: 
        division(premierNombre, deuxiemeNombre);
        break;
    default :
    alert("Une erreur est survenue")
}

alert("Voici le résultat : \n" + resultat)





