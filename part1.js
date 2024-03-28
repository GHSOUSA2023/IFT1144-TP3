//part 1 - functions

//converter pes para centimeters
function poucesVersCM(){
   let value = document.getElementById("inputText").value;
   let resultat = parseFloat(value) * 2.5;
   document.getElementById("resultat").innerHTML = "pouces ==> " + resultat.toFixed(0) + " cm";
}

//converter cm para pes
function cmVersPouces(){
    let value = document.getElementById("inputText").value;
    let resultat = parseFloat(value) / 2.5;
    document.getElementById("resultat").innerHTML = "cm ==> " + resultat.toFixed(0) + " pouces";
 }
//converter fah para cel
function celVersFah(){
    let value = document.getElementById("inputText").value;
    let resultat = (parseFloat(value) * 9) / 5 + 32;
    document.getElementById("resultat").innerHTML = "celsius ==> " + resultat.toFixed(1) + " farenheit";
 }
//converter cel para fah
function fahVersCel(){
    let value = document.getElementById("inputText").value;
    let resultat = (parseFloat(value) - 32) * (5 /9) ;
    document.getElementById("resultat").innerHTML = "farenheit ==> " + resultat.toFixed(1) + " celsius";
 }