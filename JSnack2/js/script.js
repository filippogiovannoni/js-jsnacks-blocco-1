/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//Chiedo la prima parola con un prompt e la salvo in una variabile

const Word_1 = prompt('Scrivi una parola');

//Chiedo la seconda parola con un prompt e la salvo in una variabile

const Word_2 = prompt("Scrivi un'altra parola");

//Salvo in una variabile la lunghezza della prima parola

const firstWord = Word_1.length;

//Salvo in una variabile la lunghezza della seconda parola

const secondWord = Word_2.length;

//Seleziono il div della parola più corta e lo salvo in una variabile

const short_word = document.querySelector('short_word');

//Seleziono il div della parola più lunga e lo salvo in una variabile

const long_word = document.querySelector('long_word');


// Se la prima parola è più lunga della seconda parola
if (firstWord > secondWord) {

    //Prima stampo in pagina la parola più corta
    console.log(Word_2);

    //Poi stampo in pagina la parola più lunga
    console.log(Word_1);
    
//Altrimenti se la prima parola è più corta della seconda parola
} else if (firstWord < secondWord) {

    //Prima stampo in pagina la parola più corta
    console.log(Word_1);

    //Poi stampo in pagina la parola più lunga
    console.log(Word_2);

//Altrimenti se hanno lunghezza uguale
} else {

    //Stampo un alert
    alert('Le due parole hanno la stessa lunghezza!');

}