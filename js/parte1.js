//part 1 - functions

//convertir les pouces en centimètres
function poucesVersCM(){
   let value = document.getElementById("inputText").value;
   let resultat = parseFloat(value) * 2.5;
   document.getElementById("resultat").innerHTML = "pouces ==> " + resultat.toFixed(0) + " cm";
}

//convertir les centimètres en pouces
function cmVersPouces(){
    let value = document.getElementById("inputText").value;
    let resultat = parseFloat(value) / 2.5;
    document.getElementById("resultat").innerHTML = "cm ==> " + resultat.toFixed(0) + " pouces";
 }
//convertir fahrenheit en celsius
function celVersFah(){
    let value = document.getElementById("inputText").value;
    let resultat = (parseFloat(value) * 9) / 5 + 32;
    document.getElementById("resultat").innerHTML = "celsius ==> " + resultat.toFixed(1) + " farenheit";
 }
//convertir celsius en fahrenheit
function fahVersCel(){
    let value = document.getElementById("inputText").value;
    let resultat = (parseFloat(value) - 32) * (5 /9) ;
    document.getElementById("resultat").innerHTML = "farenheit ==> " + resultat.toFixed(1) + " celsius";
 }