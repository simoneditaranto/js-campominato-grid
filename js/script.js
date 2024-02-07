// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// memorizzo il bottone "genera" che al click farà visualizzare la griglia
buttonStartElement = document.querySelector("#start");

buttonStartElement.addEventListener("click", 

    function() {

        // prendiamo la griglia 
        // utilizzando un ciclo for, per ogni iterazione creiamo una cella nella griglia e inseriamo come testo
        // l'indice dell'iterazione attuale
        
        const gridElement = document.querySelector("#grid");
        
        // griglia 10x10
        for(let i = 0; i < 100; i++) {
        
            // creiamo l'elemtno
            const newElement = document.createElement("div");
            newElement.classList.add("square");
            newElement.innerText = i + 1;
        
            gridElement.append(newElement);
        
        }

    }
)


