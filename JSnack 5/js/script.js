/*
Snack 5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// Creo un array vuoto
const list = []

// Chiedo per 6 volte all'utente di inserire un numero con ciclo for e prompt
for (let i = 0; i < 6; i++) {
    
    // Salvo in una variabile i numeri inseriti nel prompt
    const numb = Number(prompt('Inserisci un numero'))
    
    // Se il numero è dispari
    if (numb % 2 !== 0) {
        
        // Viene pushato nell'array
        list.push(numb)
    
    // Altrimenti
    } else {
        
        // Viene loggato in console che è un numero pari
        console.log('è pari');
    }
}

// Alla fine del ciclo loggo in console l'array con i numeri dispari all'interno
console.log(list);



