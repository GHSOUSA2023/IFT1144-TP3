function tailleH(){
    let nomPrenom = document.getElementById("NomPren").value;
    let taille = parseInt(document.getElementById("taille").value);

    document.getElementById("resultatParte2").innerHTML = 
    `<h` + taille + `> Bonjour ` + nomPrenom + ` niveau=` + taille + `</h` + taille + `>`;
}