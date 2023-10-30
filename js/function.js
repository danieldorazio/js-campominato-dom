// FUNZIONI HEADER

/**FUNZIONE cleaning
 * funzione che toglie tutti gli elementi all'interno di una sezione tramite un ciclo while
 * @param {element} section
 * @returns {any}
 */
function cleaning (section) {
    while(section.hasChildNodes()) {
        section.removeChild(section.firstChild);
    }
}


/**FUNZIONE difficult
 * funzione che in base al valore della opzione di difficolta varia la grandezza della tabella 
 * @param {valore} difficultOption
 * @returns {number} grandezza della tabella
 */
function difficoult(difficultOption) {
    let result = "";
    if (difficultOption === "hard") {
        result += 49;        
    }else if (difficultOption === "medium") {
        result += 81;
    }else if (difficultOption === "easy") {
        result += 100;
    }
    
    return result;
}


/**FUNZIONE bombsGenerator
 * funzione che inserendo un numero max mi crea un array con max number tutti diversi tra loro 
 * @param {number} maxNumber
 * @returns {array} numeri randomici tutti diversi tra loro 
 */
function bombsGenerator(maxNumber) {
    const result = [];
    while (result.length < 16) {
    const rndBomb = Math.floor(Math.random() * (maxNumber - 1 + 1) ) + 1;
    if (!result.includes(rndBomb)) {
        result.push(rndBomb);
    }
}
return result;
}

/**************************************************************************/
//  FUNZIONI MAIN

/**FUNZIONE openString
 * fuznione che prende in interno il valore di celle che si voglio creare e apre in risposta l'array con gli elementi all'interno 
 * @param {numberInput} numberInput
 * @returns {elements} elementi inseriti nel DOM con append
 */
function openString(numberInput) {

    const numberCell = numberGeneretor(numberInput);

    for (let i = 0; i < numberCell.length; i++) {
        const element = numberCell[i];
        element.addEventListener("click", function () {
            
            const cellElem = this.textContent;
            console.log(cellElem);
            
            
            if (arrayBombs.includes(parseInt(cellElem))) {
                element.style.backgroundColor = "red";
                console.log("fine gioco");

            } else {
                element.style.backgroundColor = "lightblue";
                console.log("continua ");

                if (!arrayClicked.includes(parseInt(cellElem))) {
                    arrayClicked.push(parseInt(cellElem)) 
                }
                
                if (arrayClicked.length === userInput - 16) {
                    console.log("hai vinto");
                }
            }
            





        })
        grid.append(element); 
    }    
}


/**FUNZIONE gridGenerator
 * funzione ciclica che crea un elemento HTML X volte 
 * @param {number} gridNumber numero di elementi che si voglio creare 
 * @returns {element} elementi creati 
 */
function gridElem(gridNumber) {
    const gridElem = document.createElement("div");
    gridElem.classList.add("cell");
    if (difficultySelector.value === "hard") {
        gridElem.classList.add("hard");
        
    } else if (difficultySelector.value === "medium") {
        gridElem.classList.add("medium");

    } else if (difficultySelector.value === "easy") {
        gridElem.classList.add("easy");

    } 
    gridElem.innerHTML = gridNumber;
    return gridElem;    
}


/**FUNZIONE numberGenerator
 * funzione che crea una stringa di numeri di X lunghezza e poi la apre per prenderegli singoli numeri
 * @param {number} maxNumber valore quantità di numeri 
 * @returns {number} 
 */
function numberGeneretor(maxNumber) {
    // per creare nuemro da inserire nell'elemento
    const numberElements = [];
    for (let i = 1; i <= maxNumber; i++) {
        const element = gridElem(i);
        numberElements.push(element)
    }
    return numberElements  
}


