const num_string = document.querySelector("#num");
var num = 0;

const dec_button = document.querySelector("#dec");
const reset_button = document.querySelector("#init");
const inc_button = document.querySelector("#inc");

dec_button.addEventListener("click", dec_number);

function dec_number (){
    num --;
    num_string.innerHTML = num;
}

reset_button.addEventListener("click", (event)=>{
    num = 0;
    num_string.innerHTML = num;
});

inc_button.addEventListener("click", (event)=>{
    num ++;
    num_string.innerHTML = num;
});


