/*
Snack 1: 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// Chiedo il primo numero all'utente con un prompt e lo salvo in una variabile

const firstNumber = Number(prompt('Dimmi un numero'))

// Chiedo il secondo numero all'utente con un prompt e lo salvo in una variabile

const secondNumber = Number(prompt('Dimmi un altro numero'))

// Seleziono la classe nell'html e la salvo in una variabile
const number = document.querySelector('.number')

// Se il primo numero è un isNaN oppure il secondo è un isNaN
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    //Stampo un alert
    alert('Devi inserire due numeri!')

}
// Altrimenti se il primo numero è maggiore del secondo numero
else if (firstNumber > secondNumber) {

    //Stampo in pagina il primo numero
    number.innerHTML = firstNumber

//Altrimenti se il primo numero è minore del secondo numero
} else if (firstNumber < secondNumber) {

    //Stampo in pagina il secondo numero
    number.innerHTML = secondNumber

//Altrimenti stamp un alert
} else {
    alert('Sono due numeri uguali!')
}