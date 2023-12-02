/*
Snack 8:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/


// Credo una variabile di appoggio nella quale sommo le cifre del numero
let somma = 0;

//Chiedo un numero di 4 cifre all'utente tramite un prompt e lo salvo in una variabile
const numb = prompt('Inserisci un numero di 4 cifre')

// Creo un ciclo for che iteri fino alla lunghezza del numero
for (let i = 0; i < numb.length; i++) {
    
    // Salvo in una variabile la cifra selezionata ad ogni iteraziome
    const numbElement = numb[i];
    
    // Alla variabile viene sommata ogni cifra del numero
    somma += Number(numbElement);
    
}

// Loggo in console il risultato
console.log("La somma dei 10 numeri inseriti è:", somma);

