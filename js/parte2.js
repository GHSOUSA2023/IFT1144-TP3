// fonction pour capturer les données html
function tailleH() {
    let nomPrenom = document.getElementById("NomPren").value;
    let taille = parseInt(document.getElementById("taille").value);
    let resultTextElement = document.getElementById("resultText");
    let messageElement = document.getElementById("message");

    // valider que la taille de h est comprise entre 1 et 6
    if (taille >= 1 && taille <= 6) {
        // Si le résultat est conforme aux attentes, il appliquer le  valeur de la function tailleH sur la balise h
        resultTextElement.innerHTML = `<h${taille}> Bonjour ${nomPrenom} niveau=${taille}</h${taille}>`;
        
        // Efface le message d'erreur
        messageElement.innerHTML = "";
    } else {
        // s'il est en dehors de la plage, le message d'erreur s'applique
        resultTextElement.innerHTML = "";
        messageElement.innerHTML = "Erreur le niveau doit etre entre 1 et 6";
    }
}
