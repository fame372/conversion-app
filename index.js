

const  meter = 3.281 
const feet = 0.3048
const liter = 0.264 
const gallon = 3.785
const kilogram = 2.204 
const pounds = 0.453592

let kilosEl = document.getElementById("kilos-el")
let volumeEl = document.getElementById("volume-el")
let feetEL = document.getElementById("feet-el")
let gallonEL = document.getElementById("gallons-el")
let poundsEL = document.getElementById("pounds-el")
let meterEL = document.getElementById("meter-el")
let convertBtn = document.getElementById("convert-btn")


convertBtn.addEventListener("click", function() {
    let numberEl = Number(document.getElementById("number-el").value)
   
    meterToFeet(numberEl)
    literToGallon(numberEl)
    kiloToPound(numberEl)
  
})


function  meterToFeet(number){
    meterEL.innerHTML = `${number} meter = ${(meter * number).toFixed(2)} feet | ${number} feet = ${(feet * number).toFixed(2)} meters`
    }


function  literToGallon(number){
     volumeEl.innerHTML = `${number} liters =  ${(liter * number).toFixed(2)} gallon |  ${number} gallons = ${( gallon * number).toFixed(2)} liters`
        }

function  kiloToPound(number){
        kilosEl.innerHTML = `${number} Kilos = ${(kilogram * number).toFixed(2)} pounds| ${number} pounds = ${( pounds * number).toFixed(2)} kilos`
         }       