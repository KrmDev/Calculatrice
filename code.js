function addition(nombreA, nombreB) {
    
    return nombreA + nombreB;

}

function multiplication(nombreA, nombreB) {
    
    return nombreA * nombreB;

}

function soustraction(nombreA, nombreB) {
    
    return nombreA - nombreB;

}

function division(nombreA, nombreB) {
    
    if(nombreB == 0) {
        throw new Error(" Impossible de diviser par 0.");
    }

    return nombreA / nombreB;
    
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
} while(choix == null || choix == "" || choix >= 5 || choix == 0); // ou (choix != 1 && choix != 2 && choix != 3 && choix != 4);

alert("Vous avez choisis l'option " + choix)

do {
premierNombre   =  Number(prompt("Entrez le premier nombre :"))
deuxiemeNombre  =  Number(prompt("Entrez le deuxième nombre :"))
} while(isNaN(premierNombre) || isNaN(premierNombre))

try {
    
switch (choix) {
    case 1:
        var resultat = addition(premierNombre, deuxiemeNombre)
        break;
    case 2:
        var resultat = multiplication(premierNombre, deuxiemeNombre);
        break;
    case 3:
        var resultat = soustraction(premierNombre, deuxiemeNombre);
        break;
    case 4: 
        var resultat = division(premierNombre, deuxiemeNombre);
        break;
    default :
        throw new Error("Une erreur est survenue")      
}
alert("Voici le résultat : \n" + resultat);
}
catch(error) {
    alert(error);
}






