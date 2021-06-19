
//set count tp zero  
let count = 0;

// select value and buttons 
const value = document.querySelector("#value");// using the document object
const btns = document.querySelectorAll(".btn"); // collecting all the buttons

console.log(btns);// these are for all three of them buttons

btns.forEach(function(btn){ // we are iterating through th buttons that have the class btn in the html
    btn.addEventListener("click",function(e){ // this is making the buttons do something when clicked // event object
        const styles = e.currentTarget.classList; // making the styles varible // class list arranges all the btn classes nextt to btn 
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
             count++;
        } else{
            count = 0; // the last choice is reset and thats why it goes bak to setting the count to zero
            
        }
        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "black";
        }
        value.textContent = count;// we got to make the vcalue text conten t equal the count depeding on the click 
    });

}); 