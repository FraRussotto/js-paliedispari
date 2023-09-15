# Esercizio di oggi:
## nome repo: **js-paliedispari**

### **Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
### **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
##### **Consigli del giorno**
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento!

### Svolgimento logico - Esercizio "Palindroma"

Trattare la parola inserita dall'utente come un array e tramite 1 contatore, confrontare le lettere partendo da indice iniziale con quello finale sottraendo l'indice iniziale per poi confrontare indice inziale +1 con quello finale -1 e così via finchè la condizione flag è soddisfatta.
Se la condizione flag è soddisfatta fino a indice iniziale < indice max, la parola è palindroma altrimenti no.

### Svolgimento logico - Esercizio "Pari e dispari"

Creare l'inserimento della scelta tra pari o dispari per l'utente e l'inserimento del numero da 1 a 5.
Creare l'input random del pc tramite la funzione math.random.
Stabilire il vincente attraverso il controllo sulla somma dei 2 numeri per vededre se è pari o dispari attraverso una seconda funzione.


