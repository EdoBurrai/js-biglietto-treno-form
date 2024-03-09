console.log('Calcolo Biglietto');

//CHIEDERE Numero di KM
//CHIEDERE Età del passeggero
//CALCOLARE prezzo del biglietto 

//-- CALCOLARE il prezzo base sapendo che ogni Km costa 0.21 euro 
//-- CALCOLARE lo sconto

//-- SE Età '<18' --> Sconto del 20%
// -- ALTRIMENTI SE Età '>65' --> Sconto del 40%

//-- CALCOLARE prezzo finale = prezzo base - sconto
// STAMPARE Prezzo con 2 cifre decimali 

const PriceKm = 0.21

const KM = parseInt(prompt('Lunghezza del viaggio in KM:'));
console.log(KM, typeof KM);

const age = parseInt(prompt('La tua età: '));
console.log(age,typeof age);

const basePrice = KM * PriceKm;
console.log(PriceKm);

let discount = 0;

if(age < 18){

    discount = 0.2
} else if(age > 65){

    discount = 0.4
}

const Prizefinal = basePrice - basePrice * discount
console.log('€',Prizefinal.toFixed(2));


//BONUS
const priceElement = document.getElementById('price');

Prizefinal.innerHTML = 'Prezzo del biglietto:' + Prizefinal.toFixed(2) + '&euro'