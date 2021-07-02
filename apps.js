 // we want the code to give us a random samople when the button is pressed
// we will take the random genergated awnser and pair it with the user generated awnser and if they match we will display a message of winner if the combo equals a win
//  we will need buttons radio buttons to go up under thr elements
// we also need a submit button to ne js functional that will run the 




const btns = document.querySelectorAll(".btn");

var userInput = // we get the user reponse form which button they click

btns.forEach(function(btn)  {
btn.addEventListener("click", function(e){
    let respones = ["rock", "paper", "Scissors"]; // an array of resposnes strings  // we want the code to give us a random samople when the button is pressed
    let randomIndex = Math.floor(Math.random() * respones.length);
    let randomElement = respones[randomIndex];
    
    const styles = e.currentTarget.classList; // this looks at the style and class tags of the html lines. 
    
        if(styles.contains(randomElement)&& (randomElement == "user input")) 
)};