const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// 
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
 
btn.addEventListener("click", function() {
    let hexColor = "# "; // becuase hexvalue will be changing we use let instead of const which will give an error;
    for(let i = 0; i < 6; i++){ // 6 times because we gotr to fill the hash value 
        hexColor += hex[getRandomNumber()];// hexcolor from earlier now we are hardcoding later will be random 
    }
    color.textContent = hexColor; // outside the loop but inside the function 
    document.body.style.backgroundColor = hexColor;
});

// we need to set up a function to get random 

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

