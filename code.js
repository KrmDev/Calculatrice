let choix;

do {
    choix = Number(prompt("Que shouhaitez-vous faire ?\n\n" 
    + "1 - Addition\n"
    + "2 - Multiplication\n"
    + "3 - Soustraction\n"
    + "4 - Division\n"));
} while(choix == null || choix == "" || choix >= 5 || choix == 0);

alert("Vous avez choisis " + choix );





