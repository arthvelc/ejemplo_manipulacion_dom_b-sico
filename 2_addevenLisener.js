const h1 = document.querySelector('h1');
const form = document.getElementById('form');
const numero1 = document.getElementById('numero-1');
const numero2 = document.getElementById('numero-2');
const boton = document.querySelector; ('#resultado');
const pResutl = document.querySelector('#result')

// Esre addevenlistener recibe los argumentos que le indiquemos, en este caso lo que hará es escuchar el click y despues le pasamos el nombre de la función que escribimos sin parentesis.
form.addEventListener('click', boton_sumar);
// lo que se modificó despues es cambiar el tipo de envento que va a escuchar la función de click a submit.



function boton_sumar() {
    //console.log({event});
    //even.preventDefault();
    let sumInputs = Number(numero1.value) + Number(numero2.value);
    pResutl.innerHTML = ("El resultado es: ") + sumInputs;
}