let selectedNumber = null;
const submitBtn = document.getElementById("submit");
const buttons = document.getElementsByClassName("eval");
var resultDiv=document.getElementsByClassName("ShownResult");
const result=document.querySelector(".r-two");

for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", (e) => {
    
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("btnbackgund");
    }
    
    e.currentTarget.classList.add("btnbackgund");
    
    selectedNumber = i+1;
    console.log(selectedNumber)
    
    
});
}

submitBtn.addEventListener("click", (e) => {
    if (selectedNumber !== null) 
          {
              document.getElementById("MainContainer").classList.add("Result");
              document.getElementById("ShownResult").classList.remove("Result");
              const theResult=document.createElement("p")
              theResult.textContent=`You have selected  ${selectedNumber} ouf of ${buttons.length}`
              theResult.classList.add("rating")
              result.appendChild(theResult)
          } 
          
    else {
        e.preventDefault()
    }
    });



    