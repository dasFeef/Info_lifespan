const timer = $("#home-timer-countup"); 




let seconds = 0;
let minutes = 0; 
let hours = 0; 
let days = 0; 

const interval = setInterval(()=>{ 
    seconds++;

    function allocateValues(){
        if(seconds == 60) seconds = 0, minutes++; 
        if(minutes == 60) minutes = 0, hours++; 
        if(hours == 24) hours = 0, days++;
    }
    allocateValues();

    timer.text(() => {

    if(!days) time_d = '00'
    else if(days < 10) time_d = `0${days}`
    else{time_d = days}

    if(!hours) time_h = '00'
    else if(hours < 10) time_h = `0${hours}`
    else {time_h = hours}

    if(!minutes) time_m = '00'
    else if(minutes < 10) time_m = `0${minutes}`
    else{time_m = minutes}

    if(!seconds) time_s = '00'
    else if(seconds < 10) time_s = `0${seconds}`
    else{time_s = seconds}

    return `${time_d}:${time_h}:${time_m}:${time_s}`;
});

console.log(seconds, timer.text());

}, 1000);

/* 
    if(seconds == 4){
        clearInterval(interval);
        let end = new Date().getTime(); 
        console.log(`This took: ${end - start} ms!`)
        return;
    }
*/