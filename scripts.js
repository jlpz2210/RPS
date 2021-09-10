var myPoints = 0, compPoints = 0, random;
var modal = document.getElementById("myModal")
var span = document.getElementsByClassName("close")[0]
var text = document.getElementById("modal-text")

function myFunction() {
    document.getElementById("myPoints").innerHTML = myPoints;
    document.getElementById("compPoints").innerHTML = compPoints;
    modal.style.display = "block"
}

function restart(){
    myPoints = 0
    compPoints = 0
    document.getElementById("myPoints").innerHTML = myPoints;
    document.getElementById("compPoints").innerHTML = compPoints;
}

function randomRPS(){
    random = Math.floor(Math.random()*3)
}

function chosePaper(){
    randomRPS();
    switch (random) {
        case 0:
            text.innerHTML = "La computadora eligió papel, Empate"
            break;
        
        case 1:
            text.innerHTML = "La computadora eligió roca, Ganas"
            myPoints++;
            break;

        case 2:
            text.innerHTML = "La computadora eligió tijeras, Pierdes"
            compPoints++;
            break;
    }
    myFunction();
}

function choseRock(){
    randomRPS();
    switch (random) {
        case 0:
            text.innerHTML = "La computadora eligió papel, Pierdes"
            compPoints++;
            break;
        
        case 1:
            text.innerHTML = "La computadora eligió roca, Empate"
            break;

        case 2:
            text.innerHTML = "La computadora eligió tijeras, Ganas"
            myPoints++;
            break;
    }
    myFunction();
}

function choseScissors(){
    randomRPS();
    switch (random) {
        case 0:
            text.innerHTML = "La computadora eligió papel, Ganas"
            myPoints++;
            break;
        
        case 1:
            text.innerHTML = "La computadora eligió roca, Pierdes"
            compPoints++;
            break;

        case 2:
            text.innerHTML = "La computadora eligió tijeras, Empate"
            break;
    }
    myFunction();
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }