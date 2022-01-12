/* Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
Dichiariamo chi ha vinto
(corrispondenza tra scelta pari e dispari e somma pari o dispari)
In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare, se preferite fate un diagramma
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
3. Usiamo dei valori fissi che ci aiutino a controllare il funzionamento dell’algoritmo, poi sostituiamo con random e prompt */


// L’utente sceglie pari o dispari
const userPariDispari = prompt("scegli pari o dispari")

// L'utente inserisce un numero da 1 a 5.
const userNumber = parseInt(prompt("inserisci un numero compreso tra 1 e 5"))

// Generiamo un numero random per il computer compreso tra 1 e 5
const computerNumber = Math.floor(Math.random() * 6) + 1 ;

// somma dei 2 numeri
const somma = userNumber + computerNumber


// Stabiliamo se la somma dei due numeri è pari o dispari e dichiariamo il vincitore

if (somma % 2 == 0 && userPariDispari == "pari" ) {
    console.log(`Hai scelto ${userPariDispari},
    hai inserito il numero ${userNumber},
    il computer ha generato il numero casuale ${computerNumber},
    la somma dei 2 numeri e pari quindi hai vinto! `);
} else if  (somma %2 != 0 && userPariDispari == "dispari") {
    console.log(`Hai scelto ${userPariDispari},
    hai inserito il numero ${userNumber},
    il computer ha generato il numero casuale ${computerNumber},
    la somma dei 2 numeri e dispari quindi hai vinto! `);
} else {
    console.log(`Hai scelto ${userPariDispari},
    hai inserito il numero ${userNumber},
    il computer ha generato il numero casuale ${computerNumber},
    in base alle regole stabilite ha vinto il computer`);
}

