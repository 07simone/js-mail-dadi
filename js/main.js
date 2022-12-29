// A) Chiedere utente la sua emai
    const inserisciEmail = prompt("inserisci la tua email").trim(); 
// B) creare una lista di email
    const nomiEmail = ["marco.lombardi@libero.it","vanessa.brumotti@libero.com","giulia.bianchi@libero.it","antonio.lombardi@libero.it", "sara.rea@gmail.com"] 
    console.log(nomiEmail);   
    nomiEmail.push("francesco.grande@libero.it")
    let output = document.getElementById("newEmail");
    
//  c) creare un ciclo per controllare chi sia nella lista nomiEmail e se non è presente allora consolo.log(email non presente)

let contatore = 0;

for (let i = 0; i < nomiEmail.length; i++){

    if( inserisciEmail == nomiEmail[i]){
        output.innerHTML = "Utente registrato con la seguente email: " + inserisciEmail;
        console.log("email corretta");
        contatore++;
    
    }else{
        if (contatore == 0){
            output.innerHTML = "email non presente";
            console.log("email non presente");
        }
    }
        
}   

//  D) 
   const player1 = Math.floor (Math.random() * 6) +1;
    console.log ("il tuo risultato è " + player1)

   const player2 = Math.floor (Math.random() * 6) +1;
    console.log ("il mio risultato è " + player2)
    
    /* const Random = Math.floor(Math.random() *5) +1;
    console.log(Random)   */
    /* vado a gnerare un numero da 1 a 6 */

    if (player1 > player2){
        console.log("ho vinto io")

    } else if (player2 >  player1){
        console.log("ha vinto lui")
    } else {
        console.log("i numeri sono uguali")
    }






    //se il mio numero è maggiore del tuo ho vinto io
    // altrimenti hai vinto tu
    //se il numero è maggiore di 6 allora riscrivi di nuovo il numero





