/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Numero: questo dato rappresenta i numeri. Si possono immaginarli come le cifre che si usano per contare le cose.
  Ad esempio, se si ha 3 biscotti, il numero che rappresenta il numero di biscotti è un dato di tipo numero.
  
  Stringa: è una serie di lettere, parole o frasi. Si può pensare come una collana di perline, dove ogni perla è una lettera. 
  Ad esempio, se scriviamo "ciao", la parola "ciao" è una stringa.
  
  Booleano: questo dato può avere solo due valori: vero o falso. Si può pensare ciò come una luce che può essere accesa (vero)
  o spenta (falso). Se qualcuno mi chiederebbe se avessi fame, gli risponderò con vero se ho fame o falso se non ho fame.
  
  Null: rappresenta l'assenza di un valore. Si può pensarlo come a una scatola vuota che non contiene nulla.
  
  Oggetto: è un insieme di propietà o caratteristiche. Si può pensarla come un giocattolo con diverse parti. 
  Ad esempio, un oggetto auto può avere proprietà come il colore, il numero di porte e la marca.
  
  Array: è un insieme di dati. Si può immaginarlo come una scatola piena di oggetti diversi. 
  Ad esempio, se si ha un array di frutta, si può mettere dentro mele, pere, arance etc.*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 let name = "Gabriele";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
let sum = number1 + number2;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*const name = "Gabriele";
name = "Colombo";
console.log(name);
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let risultato = 4 - x;
console.log('Il risultato della sottrazione è:' + risultato);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "Jhon";

if (name1 !== name2) {
  console.log("name1 è diverso da name2");
} else {
  console.log("name1 è uguale a name2");
}

/*EXTRA*/
if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log("name1 è diventato uguale a name2");
} else {
  console.log("name1 non diventa uguale a name2");
}

