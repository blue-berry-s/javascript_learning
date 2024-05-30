//Variables
let hourDown = 0;
let minDown = 0;
let secDown = 0;

const timeText = document.getElementById("timer");

const inc_bttns = document.getElementsByClassName("increase");
const dec_bttns = document.getElementsByClassName("decrease");

const start_bttn = document.getElementById("start");
const stop_bttn = document.getElementById("stop");
const reset_bttn = document.getElementById("reset");

const endText = document.getElementById("endMessage");

// Add event Listener to each of the increment and decrement button
for (let i = 0; i < inc_bttns.length; i++){
    inc_bttns[i].addEventListener("click", setIncTime);
}

for (let i = 0; i < inc_bttns.length; i++){
    dec_bttns[i].addEventListener("click", setDecTime);
}

// increase functionality 
function setIncTime(event) {
    if (event.target.name == "hour"){
        if (hourDown < 98){
            hourDown ++;
        }
        else{
            hour=0;
        }
    }
    else if (event.target.name == "min"){
        if (minDown < 59){
            minDown ++;
        }
        else{
            minDown=0;
        }
    }
    else if (event.target.name == "sec"){
        if (secDown < 59){
            secDown ++;
        }
        else{
            secDown=0;
        }
    }

    updateTimeText();
}

// Decrease functionality 
function setDecTime(event) {
    if (event.target.name == "hour"){
        if (hourDown > 0){
            hourDown --;
        }
        else{
            hour=99;
        }
    }
    else if (event.target.name == "min"){
        if (minDown > 0){
            minDown --;
        }
        else{
            minDown=59;
        }
    }
    else if (event.target.name == "sec"){
        if (secDown > 0){
            secDown --;
        }
        else{
            secDown=59;
        }
    }
    updateTimeText();
}

let completed = false;


let counting = false;
//variable to store clock setInterval inorder to stop the functionality
let timerFunction = null;

start_bttn.addEventListener("click", start)
stop_bttn.addEventListener("click", stop)
reset_bttn.addEventListener("click", restart)


function start(){
    if (!counting && (secDown > 0 || minDown > 0 || hourDown > 0)){
        endText.innerText = "Your timer is counting down";
        timerFunction = setInterval(decTime, 1000);
        counting = true;
        document.body.style.backgroundColor = "#54ba54";
    }

}

function stop(){
    if (counting){
        endText.innerText = "Your timer is paused";
        clearInterval(timerFunction);
        timerFunction = null;
        counting = false;
        document.body.style.backgroundColor = "#ddc53a";
    }
}

function restart(){
    endText.innerText = "Choose your time";
    stop();
    hourDown = 0;
    minDown = 0;
    secDown = 0;
    updateTimeText();
    document.body.style.backgroundColor = "#e75e5e";
}

function decTime(){
    if (secDown == 0){
        if (minDown == 0){
            if (hourDown > 0){
                hourDown--;
                minDown = 59;
            }
            else{
                endTimer()
                return;
            }
        }
        else if (minDown > 0){
            minDown--;
        }
        secDown = 59;
    }
    else{
        secDown--;
    }
    updateTimeText();
}


function endTimer(){
    stop();
    document.body.style.backgroundColor = "#e75e5e";
    endText.innerText = "Your timer is done now!"
}




function updateTimeText(){
    timeText.innerText = `${hourDown.toString().padStart(2, '0')}` + ":" + `${minDown.toString().padStart(2, '0')}` + ":" + `${secDown.toString().padStart(2, '0')}`;

}









