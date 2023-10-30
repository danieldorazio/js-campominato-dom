// INPUT

const grid = document.querySelector(".grid");


const difficultySelector = document.getElementById("difficulty");
const playBtn = document.getElementById("play-btn");

// VARIABILI GLOBALI
let arrayBombs;
let arrayClicked = [];
let userInput;

// crerare larray delle celle cliccare 

/*********************************************************/

// START
playBtn.addEventListener("click", function () {

    const removePrevious = cleaning(grid); //metodo figo 
    // grid.innerHTML = "";  //metodo meno figo

    
    userInput = difficoult(difficultySelector.value);

    arrayBombs = bombsGenerator(userInput) 
    console.log(arrayBombs); 
    
   
    
    const start = openString(userInput);    
})













