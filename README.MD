# Campominato Layout - Layout di classico gioco con 3 livelli di diffioltà.

Questa è una soluzione per eseguire questo esercizio puramente dal lato visivo con il solo uso di HTML, CSS e Javascript Plain .

## Sommario

- [Panoramica](#Panoramica)
  - [La sfida](#La-sfida)
- [Il mio processo](#il-mio-processo)
  - [Costruito con](#costruito-con)
  
## Panoramica

### La sfida

Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


## Il mio processo
- [X] Al click del bottone play compare la griglia 

    - [X] Creare una selezione in html per la difficoltà 
        - se il valore dell'opzione è === "hard" inserire una griglia di 49 caselle (7x7)
        - se il valore dell'opzione è === "medium" inserire una griglia di 81 caselle (9x9)
        - se il valore dell'opzione è === "easy" inserire una griglia di 100 caselle (10x10)
    - [X] Generare 16 bombe:
        - array di 16 numeri casuali non duplicati compresi nel range del livello di difficolta scelto (da 1 a 100 / 81 / 49)
    - [] Array di numeri "non bombe" cliccate dall'utente per avere il punteggio 
    

- [X] Creare la griglia con all'interno i numeri:

    - [X] creare un ciclo for che mi ripete questa funzione X volte 
            - [X] Creare un elemento 
            - [X] Al click della cella della griglia:
                - leggo il numero cliccato 
                - se il numero cliccato è nell'array di bombe:
                    - la cella diventa rossa
                    - fine le gioco --> utente perde 
                - altrimenti:
                    - la cella diventa azzurra 
                    - se questo numero non è stato cliccato precedentemente:
                        - aggiungere il numero all'array di numeri "non bombe" cliccati 
                    - se la lunghezza dell'array di "non bombe" è uguale al numero massimo di tentativi:
                        - fine gioco --> utente vince 
    
    - [X] Creara un ciclo che mi crei un numero da inserire all'interno dell'elemento


### Costruito con

- Semantica HTML5 markup
- CSS Flexbox
- Javascript Plain

        

