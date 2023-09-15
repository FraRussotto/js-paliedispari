//1. Creo i prompt per l'utente e successivamente controllo che abbia inserito le parole correttamente

const chooseUser = prompt('Scegli tra pari o dispari')

let message = document.getElementById('output');

if(chooseUser !== 'pari' && chooseUser !== 'dispari') message.innerHTML = 'Devi inserire "pari" o "dispari"'

else{
  const nUser =  parseInt(prompt('Scegli un numero tra 1 e 5'))

//2. Inserisco un controllo per verificare se l'utente abbia inserito un numero e una stringa e successivamente che sia compreso tra 1 e 5.
  if(isNaN(nUser)) message.innerHTML = 'Inserire un valore numerico'
  if(nUser > 0 && nUser < 6){
    console.log('Numero user -->' + ' ' + nUser);


//4. Genero il numero del pc attraverso la funzione esterna "random"
    const nPc = random();
    console.log('Numero pc -->' + ' ' + nPc);

//5. Sommo i numero di utente e pc
    const somma = nUser + nPc
    console.log(somma);
  
  
    const PariDispari = control(somma)
  
    if(PariDispari) message.innerHTML = 'Hai vinto';
    message.innerHTML = 'Ha vinto il Pc';
  }
}

// Funzioni

function random(nPc){
  nPc = Math.ceil(Math.random() * 5)
  return nPc;
}

function control(somma){
  let result = true;
  if(somma % 2 !== 0) result = false;

  return result;
}