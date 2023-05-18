let dv = document.getElementById('cima')
let gasolina, diesel, alcool, total1, total2, total3

gasolina = 0
alcool = 0
diesel = 0

function alco() {
alcool = alcool + 1
}

function gasosa() {
gasolina = gasolina + 1
}

function dise() {
diesel = diesel + 1
}

function resu() {
total1 = gasolina
total2 = diesel
total3 = alcool
dv.innerHTML = 'Álcool: ' + total3 + '<br>' + 'Gasolina: ' + total1 + '<br>' + 'Diesel: ' + total2
}