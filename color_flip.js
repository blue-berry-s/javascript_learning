
const clicker = document.getElementById('clicker');

window.addEventListener("load", (event) => {
    changePage();
});


function changePage(){
    const randomColor = generateColor();
    document.getElementById("color_var").innerHTML = randomColor;
    document.body.style.background =  randomColor;
}


function generateColor(){
    // Generate a random Int number and convert it into usable HTML Hex format
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
