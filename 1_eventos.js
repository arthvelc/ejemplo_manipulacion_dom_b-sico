const h1 = document.querySelector('h1');
const numero1 =  document.getElementById('numero-1');
const numero2 =  document.getElementById('numero-2');
const btn = document.querySelector;('#resultado');
const pResutl= document.querySelector('#result')

function press_button() {
    let sumInputs= Number(numero1.value)+ Number(numero2.value);
    pResutl.innerText = ("El resultado es: ") + sumInputs;
}