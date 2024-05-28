/**
 * Setting Variables
 */

//For Clocks
const web_clock = document.querySelector("#time");

//For Alarms
const morning = document.querySelector("#morning_alarm");
const lunch = document.querySelector("#lunch_alarm");
const nap = document.querySelector("#nap_alarm");

const cat_image = document.querySelector("#cat_pics");
const cat_text = document.querySelector("#alarm_text");
cat_text.innerText = "Nothing so far"

//For Party Button
const button = document.querySelector("#party_button");


let isParty = false;

//Object for Images

const cat_image_options = {
    regular: "Lolcats_Images\\regular.jpg",
    morning_alarm: "Lolcats_Images\\morning.jpg",
    lunch_alarm: "Lolcats_Images\\lunch.jpg",
    nap_alarm: "Lolcats_Images\\nap.jpg",
    all_alarms: "Lolcats_Images\\all_alarms.jpg",
}


/**
 * Creating Clock functionality and updating it every minute
 */
function updateTime(){
    const current_time = new Date();
    let hour = current_time.getHours();
    const min = current_time.getMinutes();
    var time_of_day = "AM";

    if (hour>12){
        hour = hour - 12;
        time_of_day = "PM";
    }
    else if (hour == 0){
        hour = 12;
    }
    
    const clockStr = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')} ${time_of_day}!`;

    web_clock.innerText = clockStr;
}

updateTime();
//Updates the element every minute
setInterval(updateTime, 30000);


/**
 * 
 * Check to switch alarm image and Text
 * 
 */

function updateAlarm(){
    morning_times = morning.value.split('-');
    lunch_times = lunch.value.split('-');
    nap_times = nap.value.split('-');

    is_morning = checkAlarms(morning_times[0],morning_times[1]);
    is_lunch = checkAlarms(lunch_times[0], lunch_times[1]);
    is_nap = checkAlarms(nap_times[0], nap_times[1]);

    if (isParty){
        return;
    }
    else if (is_morning && is_lunch && is_nap){
        cat_image.src = cat_image_options.all_alarms;
        cat_text.innerText = "TOO MUCH STUFF GOING ON!"
    }
    else if (is_morning){
        cat_image.src = cat_image_options.morning_alarm;
        cat_text.innerText = "WAKE UP TIME"
    }
    else if (is_lunch){
        cat_image.src = cat_image_options.lunch_alarm;
        cat_text.innerText = "MUNCH MUNCH"
    }
    else if (is_nap){
        cat_image.src = cat_image_options.nap_alarm;
        cat_text.innerText = "EEPY TIME"
    }
    else{
        cat_image.src = cat_image_options.regular;
        cat_text.innerText = "Nothing so far"
    }
}

setInterval(updateAlarm, 600000);
morning.addEventListener("change", updateAlarm);
lunch.addEventListener("change", updateAlarm);
nap.addEventListener("change", updateAlarm);

function checkAlarms(start, end){
    const current_time = new Date();
    if (current_time.getHours() == start || (current_time.getHours() == end && current_time.getMinutes == 0)){
        return true;
    }
    
    return false;

}

/**
 * 
 * Party Alarm
 * 
 */

button.addEventListener("click", partyButton);

function partyButton(){
    if (isParty){
        isParty = false;
        updateAlarm();
        cat_text.style.color = "white";
    }
    else{
        isParty = true;
        cat_image.src = "Lolcats_Images\\party_time.jpg";
        cat_text.innerText = "PARTY TIME!!!";
        cat_text.style.color = "blue";
    }

}









