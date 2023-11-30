/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// Salvo in un array i nomi degli invitati
const guests = ['Jay Gatsby', 'Daisy Buchanan', 'Nick Carraway' ]

//Salvo in una variabile il nome inserito
const guest = prompt('Inserisci il tuo nome per vedere se sei tra gli invitati')

// Se l'array contiene il nome inserito
if (guests.includes(guest)) {
    
    // Viene mostrato l'alert
    alert('Sei tra gli invitati, buona festa!🎉')

//Altrimenti se l'array non contiene il nome inserito
} else {

    //Viene mostrato un alert differente
    alert('Mi dispiace, non sei tra gli invitati.🛑')

}

