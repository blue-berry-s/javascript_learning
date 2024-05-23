const root = document.querySelector("Body");

document.onmousemove = handleMouse;

function handleMouse(event) {
   const e = document.createElement("p");
   e.innerHTML = randomNumber();
   e.style.position = "Absolute";
   e.style.left = event.clientX + "px";
   e.style.top = event.clientY + "px";
   e.style.color = colorGeneration(event.clientX, event.clientY);
   root.appendChild(e); 
}

document.onmousedown = function (event) {
    console.count(event.clientX + " , " + event.clientY);
}


function randomNumber(){
    return Math.floor(Math.random()*6);
}

function colorGeneration(positionX, positionY){
    return "rgb("+ Math.floor((positionX/1530)*255) +"," + ((positionX**2 + positionY**2)/(1510**2 + 720**2))*255 + "," + Math.floor((positionY/720)*255) + ")";
}

