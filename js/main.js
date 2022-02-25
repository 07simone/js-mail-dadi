// A) Chiedere utente la sua email
 const inserisciEmail = prompt("inserisci la tua email");
/*  console.log(inserisciEmail);   */
// B) creare una lista di email
 const nomiEmail = ["marco.lombardi@libero.it","vanessa.brumotti@libero.com","giulia.bianchi@libero.it","antonio.lombardi@libero.it", "sara.rea@gmail.com"]
/* console.log(nomiEmail);  */


//  c) creare un ciclo per controllare chi sia nella lista nomiEmail e se non è presente allora consolo.log(email non presente)

    let contatore = 0;

for (let i = 0; i < nomiEmail.length; i++){
   /*  console.log(nomiEmail[i]) */
    if( inserisciEmail == nomiEmail[i]){
        console.log("email corretta");
        contatore = contatore + 1;
    
    }
    
}  
if ( contatore == 0){
    console.log("email non presente");
}


