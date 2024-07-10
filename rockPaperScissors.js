let buttons = document.querySelectorAll(".button");
let button1=document.querySelector(".button1");
let button2=document.querySelector(".button2");
let button3=document.querySelector(".button3");
let outputScreen=document.querySelector(".output-screen");
let toBeHidden = document.querySelectorAll(".to-be-hidden-text");
let resultText = document.querySelector(".result-text");

let random=-1;
let temp1,temp2,a=-1;
let randomForText;
let outputText;

function rand(){
    let a = Math.ceil(Math.random()*3);
    return a;

}
buttons.forEach((element)=>{
    element.addEventListener("click",()=>{
        temp1=random;
        while(random == temp1)
            random=rand();
        if(random == 1){
            outputScreen.style.backgroundImage="url('output-rock.png')";
        }
        else if(random == 2){
            outputScreen.style.backgroundImage="url('output-paper.png')";
        }
        else{
            outputScreen.style.backgroundImage="url('output-scissors.png')";
        }
        toBeHidden.forEach((element)=>{
            element.classList.add("hide");
        })
    })
})
function compWins(){
    temp2=a;
    while(temp2 == a)
        a = rand();
    let str;
    switch(a){
        case 1:
            str = "LOLLLLL GOT YOU";
            break;
        case 2:
            str="HAHA LOSER... THIS IS FUN";
            break;
        case 3:
            str="SUCH A NOOB BRO... GIVE UP";
            break;
    }
    return str;
}
function playerWins(){
    temp2=a;
    while(temp2 == a)
        a = rand();
    let str;
    switch(a){
        case 1:
            str = "UGH YOU GOT ME";
            break;
        case 2:
            str="OMG NO WAIT...UGH I LOST";
            break;
        case 3:
            str="NO WAY.. I CANT LOSE";
            break;
    }
    return str;
}
button1.addEventListener("click",()=>{
    if(random == 1){
        resultText.textContent = "OK, LETS TRY AGAIN";
    }
    else if(random == 2){
        outputText = compWins();
        resultText.textContent = outputText;
    }
    else{
        outputText = playerWins();
        resultText.textContent = outputText;
    }
})

button2.addEventListener("click",()=>{
    if(random == 1){
        outputText = playerWins();
        resultText.textContent = outputText;
    }
    else if(random == 2){
        resultText.textContent = "OK, LETS TRY AGAIN";
    }
    else{
        outputText = compWins();
        resultText.textContent = outputText;
    }
})

button3.addEventListener("click",()=>{
    if(random == 1){
        outputText = compWins();
        resultText.textContent = outputText;
    }
    else if(random == 2){
        outputText = playerWins();
        resultText.textContent = outputText;
    }
    else{
        resultText.textContent = "OK, LETS TRY AGAIN";
    }
})

button1.addEventListener("mouseover",()=>{
    button1.style.backgroundImage="url('rock-zoomed.png')";
    button1.style.border="8px solid blue";
    setTimeout(3);
})
button1.addEventListener("mouseout",()=>{
    button1.style.backgroundImage="url('rock1.png')";
    button1.style.border="none";
})

button2.addEventListener("mouseover",()=>{
    button2.style.backgroundImage="url('paper-zoomed.png')";
    button2.style.border="8px solid yellow";
})
button2.addEventListener("mouseout",()=>{
    button2.style.backgroundImage="url('paper1.png')";
    button2.style.border="none";
})

button3.addEventListener("mouseover",()=>{
    button3.style.backgroundImage="url('scissors-zoomed.png')";
    button3.style.border="8px solid red";
})
button3.addEventListener("mouseout",()=>{
    button3.style.backgroundImage="url('scissors1.png')";
    button3.style.border="none";
})

