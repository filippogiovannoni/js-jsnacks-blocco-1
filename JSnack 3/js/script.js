/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

//Salvo in una variabile let la somma dei numeri
let somma = 0;

// Itero per 10 volte il prompt
for (let i = 0; i < 10; i++) {
    
    // Tramite il prompt chiedo il numero da inserire
    let numb = Number(prompt("Inserisci un numero:"));

    // Ad ogni iterazione vengono sommati i numeri inseriti
    somma += numb;

}

console.log("La somma dei 10 numeri inseriti è:", somma);



