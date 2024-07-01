let resultEl = document.getElementById("result");
let userEl = document.getElementById("value");
let btnEl = document.getElementById("btn")
let randomNumberEl = Math.ceil(Math.random()*100);
console.log(randomNumberEl);


function CheckNumber(){
    
    let userValue = userEl.value;
    let updateValue = parseInt(userValue);
    if(updateValue===randomNumberEl){
        resultEl.textContent = "You Are Winner";
        resultEl.style.color = "green";
        btnEl.style.background = "green"
    }
    else if(updateValue<randomNumberEl){
        resultEl.textContent = "Tooo Less";
        resultEl.style.color = "red";
        btnEl.style.background = "red"
    }
    else{
        resultEl.textContent = "Tooo High";
        resultEl.style.color = "red";
        btnEl.style.background = "red"
    }
}