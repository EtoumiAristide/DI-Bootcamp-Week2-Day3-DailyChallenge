//1- Write a JavaScript program that recreates the pattern below.
//2- Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
//3- Do this Daily Challenge by youself, without looking at the answers on the internet.

//PART 1 : Utilisation d'une seule boucle
let cptLigne = 1; //Valeur de départ pour la ligne
let cptColonne = 0; //Valeur de départ pour la colonne
let pattern = "";
while (cptLigne <= 6 && cptColonne < cptLigne + 1) {
    if (cptLigne == 1) {
        //Si nous sommes à la 1ere ligne, 1 seul motif est nécessaire, on incrémente alors la ligne et la colonne
        pattern += "*\n";
        cptLigne++;
        cptColonne++;
    } else {
        /*Cette condition sert à simuler une boucle pour chaque iteration de la boucle principale
        Si colonne = ligne on dessine le dernier motif et on passe à la ligne suivante (incrementation)
        en prenant soin de réinitialiser la colonne à la position 1*/
        if (cptColonne == cptLigne) {
            pattern += "*\n";
            cptColonne = 1;
            cptLigne++;
        } else {
            /*Dans le cas contraire on déssine le motif correspondant à la colonne actuelle
              et on passe à la colonne suivante, la ligne reste intacte*/
            pattern += "*";
            cptColonne++;
        }
    }
}
console.log("pattern 1: \n" + pattern);

//PART 2 : Utilisation de boucles imbriquées
let pattern2 = "";
for (let cptLigne = 0; cptLigne < 6; cptLigne++) {
    if (cptLigne == 0) {
        pattern2 += "*\n";
    } else {
        for (let cptColonne = 0; cptColonne < cptLigne + 1; cptColonne++) {
            if (cptColonne == cptLigne) {
                pattern2 += "*\n";
            } else {
                pattern2 += "*";
            }
        }
    }
}
console.log("Pattern 2: \n" + pattern2);