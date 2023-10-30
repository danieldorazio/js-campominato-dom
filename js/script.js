// INPUT

const grid = document.querySelector(".grid");

const difficultySelector = document.getElementById("difficulty");
const playBtn = document.getElementById("play-btn");

// crerare larray delle celle cliccare 

/*********************************************************/

// START
playBtn.addEventListener("click", function () {

    const removePrevious = cleaning(grid); //metodo figo 
    // grid.innerHTML = "";  //metodo meno figo

    let userInput = "";
    userInput = difficoult(difficultySelector.value);

    const arrayBombs = bombsGenerator(16)
    console.log(arrayBombs); 
    
    const maxAttempts = (parseInt(userInput) - 16);
    console.log(maxAttempts);
    
    const start = openString(userInput);    
})













