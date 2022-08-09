const progressBar = document.querySelector(".progress-bar__value");
let intervalId;
let counter = 0;


document.querySelector(".input-form").addEventListener("submit",(event)=>{
    event.preventDefault();

    
function fillProgressBar(){
    
    if(counter === Number(event.target[0].value)){
        counter = 0
        clearInterval(intervalId)
    }
    else{
        counter++;
        progressBar.style.width = counter + "%"
    }
}


    if(Number(event.target[0].value) < 20){
        progressBar.classList.remove("yellow","green")
        progressBar.classList.add("red")
        intervalId = setInterval(fillProgressBar,10)
        
    }
    if(Number(event.target[0].value) >= 20 && Number(event.target[0].value) <= 75){
        progressBar.classList.remove("red","green")
        progressBar.classList.add("yellow")
        intervalId = setInterval(fillProgressBar,10)
    }
    if(Number(event.target[0].value) > 75){
        progressBar.classList.remove("yellow","red")
        progressBar.classList.add("green")
        intervalId = setInterval(fillProgressBar,10)
    }
})