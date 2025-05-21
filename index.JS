console.log("Hello World")





const userString = process.argv.slice(2)
const message = userString.join(" ");
console.log(message)


// importo le mie funzioni

import {countVocals, highNum} from "./function.js"

// inizializzo una variabile la quale va a prendere ogni elemento dopo il secondo dalla shell

const args = process.argv.slice(2);


// funzione .every di controllo su tutti gli elementi di args
const allNumbers = args.every(function(arg) {
  return !isNaN(arg);
});



if (args.length === 0) {
  console.log("Inserisci almeno un argomento da terminale.");
} else if (allNumbers) {
  // converto in numeri ricevuti dalla shell in numeri (potevo anche usare .map)
    const numbers = [];
        for (let i = 0; i < args.length; i++) {
            numbers.push(Number(args[i]));
    }
    console.log("Numero più alto:", highNum(numbers));
    // in quest parte invece andrò a collegare le stringhe ricevute dall'utente tramite il join e successivamente andrò a richiamare la mia funzione per il conteggio
} else {
  const phrase = args.join(" ");
  console.log("Numero di vocali:", countVocals(phrase));
}