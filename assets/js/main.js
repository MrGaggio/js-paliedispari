
/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
(prima senza funzione e poi con funzione */


   

    //Chiedere all’utente di inserire una parola
    let parola = prompt('Inserisci una parola per verificare se è palindroma')


  
    function reverse(parola){
        if(parola == parola.reverse()) {
            console.log("è un palindromo");
        }
    }


    const palindromo = reverse(parola)
    console.log(palindromo);