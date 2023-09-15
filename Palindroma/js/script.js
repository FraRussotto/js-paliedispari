// //1. Creare l'input attraverso un prompt con cui l'utente inserisce la parola da verificare e 2 variabili per il risultato.

// const word = prompt('Inserisci la parola da analizzare');
// const result = wordPalindrome(word);
// let message = document.getElementById('output');

//2. Creo 2 contatori con cui scorrere dall'inizio e dalla fine la parola inserita.

// let i = 0;

// //3. Creo un flag che mi indichi se ad ogni ciclo, la condizione è verificata.

// let palindrome = true;

// //4. Creo il ciclo per scorrere per analizzare la parola.

// while(i < word.length - 1){
//   if(word[i] !== word[length - 1 - i]) palindrome = false;
//   i++
// }

//5. Trasformo il tutto in una funzione
const word = prompt('Inserisci la parola da analizzare');
const result = wordPalindrome(word);
let message = document.getElementById('output');

//6. Stampo il risultato dell'analisi.
if(result) message.innerHTML = 'La parola è palindroma';
else message.innerHTML = 'La parola non è palindroma';


// Funzioni

function wordPalindrome(word){
  let i = 0;
  let palindrome = true;
  
  while(i < word.length - 1){
    if(word[i] !== word[word.length - 1 - i]) palindrome = false;
    i++
  }
  
  return palindrome;
  }
  