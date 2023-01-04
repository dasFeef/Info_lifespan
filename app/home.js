const timer = $("#home-timer-countup"); 

let seconds = 0;
let minutes = 0; 
let hours = 0; 
let days = 0; 

const interval = setInterval(()=>{ 
    updateTimer(); 
    updateData(); 
}, 1000);

function updateTimer(){
    seconds++;

    if(seconds == 60) seconds = 0, minutes++; 
    if(minutes == 60) minutes = 0, hours++; 
    if(hours == 24) hours = 0, days++;

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
}      

let data = {
    bananas_eaten: {
        value: 0, 
        res: (val) => {return val + 12}
    }, 
    hogs_slain: {
        value: 236363, 
        res: (val) => {return Math.round(val + (val * 0.01))}
    },
    trees_cut: {
        value: 0, 
        res: (val) => {return val + 486}
    }
}


function updateData(){
    
    //data['bananas_eaten'].value = data['bananas_eaten'].res(data['bananas_eaten'].value)
    //console.log(data['bananas_eaten'].value)

    for(let i = 0; i < Object.keys(data).length; i++){
        data[Object.keys(data)[i]].value = data[Object.keys(data)[i]].res(data[Object.keys(data)[i]].value); 
        console.log(data[Object.keys(data)[i]].value)
    }
    /*
    for(let i = 0; i < Object.keys(values).length; i++){
        let res = results[Object.keys(values)[i]]
        values[Object.keys(values)[i]] = res; 
        console.log(values)
        console.log(res)
    }*/
}