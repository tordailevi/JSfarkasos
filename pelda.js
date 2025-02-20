
console.log("Jó reggelt")

let BalElem = document.getElementById("bal")
console.log(BalElem)
let BalElem2 = document.querySelector("#bal")
console.log(BalElem2)
let BalElem3 = document.querySelectorAll("#bal")
console.log(BalElem3)

BalElem2.innerHTML="<p>Tegnap megszületett az unokám</p>"

BalElem3[0].innerHTML+="<p>Írj oda amit akarsz</p>"

let tartalomElem = document.getElementsByClassName("tartalom")
console.log(tartalomElem)
tartalomElem[0].innerHTML="<p>Én elmentem a vásárra fél pénzzel</p>"

let tartalomElem2 = document.querySelector(".tartalom")
console.log(tartalomElem2)
tartalomElem[0].innerHTML+="<p>Én nem mentem el a vásárra fél pénzzel</p>"

let tartalomElem3 = document.querySelectorAll("article div")
console.log(tartalomElem3)
tartalomElem[0].innerHTML+="<p>Én majd elmegyek a vásárra fél pénzzel</p>"


let tartalomElem4 = document.querySelectorAll("article div")
let inputElem = document.getElementById("nev")

inputElem.addEventListener("keyup", udvozles)


let buttonElem=document.querySelector("article button")
//buttonElem.addEventListener("click", udvozles)

function udvozles(){
    let nev=inputElem.value
    tartalomElem4[2].innerHTML=`Szia ${nev}!`
}

let pElem= document.querySelector("article >p:nth-child(1)")
let jobbElem = document.querySelector("#jobb")

pElem.addEventListener("click", athelyez)

function athelyez(event){
    jobbElem.appendChild(event.target)
}

pElem.addEventListener("mouseover", feltesz)

function feltesz(){
    pElem.classList.add("szegely")
}

function kiemel(){
    pElem.classList.add("kiemel")
}