
function createBoard(){
    for (let i = 0; i < 6; i++) {
        let guess = document.createElement('div');
        guess.classList.add("guess")
        // guess.style.gridRowStart = i+1;
        // guess.style.gridRowEnd = i+2;
        document.querySelector(".board").appendChild(guess);
        for(let j=0; j<5;j++){
            let div = document.createElement('div');
            // div.style.gridRow = '1fr';
            div.style.gridColumn = '1fr'
            
            div.classList.add("letterTile")
            guess.appendChild(div)
            
        }
        
    }
}
function tryGuess(){
    if(guess == word){
        document.querySelector(".win").textContent = "yes";
    }
}

function main(){
    word = "tests"
    guess = "";
    round = 0;
    document.addEventListener('keypress',(e)=>{
        let gu = document.querySelectorAll('.guess');
        let listOfLetterDivs = gu[round].querySelectorAll('.letterTile')
        //make my own delete
        console.log(e.code)

        if(e.code==127){
            guess.slice(0,-1)
        }else{
            guess+= e.key;
        }
        for(let i =0;i<guess.length;i++){
            // console.log(gu[round].qu)
            listOfLetterDivs[i].textContent = guess[i]
        }
        // console.log(guess);
        if(guess.length>=5){
            tryGuess();
        }
    })

    createBoard();

    

}
main()