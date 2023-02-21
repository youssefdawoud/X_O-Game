let turn = "X  ";
let check = true
let element1;
document.querySelector("span").innerHTML = turn;
function clickL(id) {
    let element = document.getElementById(id);
    if (check === true) {
        if (document.querySelector("#io1").innerHTML == document.querySelector("#io2").innerHTML && document.querySelector("#io2").innerHTML == document.querySelector("#io3").innerHTML && document.querySelector("#io3").innerHTML != '') {
            check = false;
            console.log("sjdj")
            element1 = document.querySelector("#io1").innerHTML;

        } else if (document.querySelector("#io4").innerHTML == document.querySelector("#io5").innerHTML && document.querySelector("#io5").innerHTML == document.querySelector("#io6").innerHTML && document.querySelector("#io6").innerHTML != '') {
            check = false;
            console.log("sldl")
            element1 = document.querySelector("#io4").innerHTML;

        }
        else if (document.querySelector("#io7").innerHTML == document.querySelector("#io8").innerHTML && document.querySelector("#io8").innerHTML == document.querySelector("#io9").innerHTML && document.querySelector("#io9").innerHTML != '') {
            check = false;
            console.log("skdk")
            element1 = document.querySelector("#io7").innerHTML;

        }
        else if (document.querySelector("#io1").innerHTML == document.querySelector("#io5").innerHTML && document.querySelector("#io5").innerHTML == document.querySelector("#io9").innerHTML && document.querySelector("#io9").innerHTML != '') {
            check = false;
            console.log("skdk")
            element1 = document.querySelector("#io1").innerHTML;

        }
        else if (document.querySelector("#io3").innerHTML == document.querySelector("#io5").innerHTML && document.querySelector("#io5").innerHTML == document.querySelector("#io7").innerHTML && document.querySelector("#io7").innerHTML != '') {
            check = false;
            console.log("skdk")
            element1 = document.querySelector("#io3").innerHTML;

        }
        else if (document.querySelector("#io1").innerHTML == document.querySelector("#io4").innerHTML && document.querySelector("#io4").innerHTML == document.querySelector("#io7").innerHTML && document.querySelector("#io7").innerHTML != '') {
            check = false;
            console.log("skdk")
            element1 = document.querySelector("#io1").innerHTML;

        }
        else if (document.querySelector("#io2").innerHTML == document.querySelector("#io5").innerHTML && document.querySelector("#io5").innerHTML == document.querySelector("#io8").innerHTML && document.querySelector("#io8").innerHTML != '') {
            check = false;
            console.log("skdk")
            element1 = document.querySelector("#io2").innerHTML;

        }
        else if (document.querySelector("#io3").innerHTML == document.querySelector("#io6").innerHTML && document.querySelector("#io6").innerHTML == document.querySelector("#io9").innerHTML && document.querySelector("#io9").innerHTML != '') {
            check = false;
            console.log("skdk")
            element1 = document.querySelector("#io3").innerHTML;

        }
        if (element.innerHTML == "") {
            if (turn === "X") {

                turn = "O";
            } else {
                turn = "X";
            }
            element.innerHTML = turn;

        }
        document.querySelector("span").innerHTML = turn;
    } else {
        won(element1)
    }
}
function won(element1) {
    document.querySelector(".nav").innerHTML = element1 + ` is the winner`;
}
function rest() {
    setTimeout(function () { location.reload() }, 0000)
}



