let submitButton = document.querySelector("#start-quiz");
console.log("button: ", submitButton);

let val1;
let val2;

newEquation();

function newEquation() {
    val1 = Math.floor(Math.random()*10);
    val2 = Math.floor(Math.random()*10);
    document.querySelector("#equation").innerHTML = `${val1} + ${val2} = `;
}

submitButton.onclick = function() {
    //runs each time th button is clicked
    let myH1element = document.querySelector("h1");

    let val = document.querySelector("#answer");
    
    if (val.value == (val1+val2)){
        // console.log("correct");
        document.querySelector("#tellUser").style.color = "green";
        document.querySelector("#tellUser").innerHTML = "Correct!";
        val.value = "";
    } else{
        document.querySelector("#tellUser").style.color = "red";
        document.querySelector("#tellUser").innerHTML = "Incorrect!";
        val.value = "";
        // console.log("wrong");
    }
    newEquation();
    
};