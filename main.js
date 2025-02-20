

let headerElem =  document.querySelector("header")
headerElem.innerHTML="<h1>Kecske-káposzta-farkas-csónak</h1>"



let footerElem = document.querySelector("footer")
footerElem.innerHTML="Tordai Levente"

let balElem = document.querySelector("#bal")
balElem.innerHTML=`<p>Bal elem</p>
                    <img id="farkas" src="kepek/farkas.png" alt="">
                    <img id="kaposzta" src="kepek/kaposzta.png" alt="">
                    <img id="kecske" src="kepek/kecske2.png" alt="">`


let jobbElem = document.querySelector("#jobb")
jobbElem.innerHTML="<p>Jobb elem</p>"

let Farkas = document.getElementById("farkas")
let Kaposzta = document.getElementById("kaposzta")
let Kecske = document.getElementById("kecske")

function feltesz(){
    pElem.classList.add("szegely")
}




//pElem.addEventListener("click", athelyez)
