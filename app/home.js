const countup = $("#home-timer-countup"); 
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

    countup.text(() => {
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

let dataset = {
    banana: {
        value: 0, 
        res: (val) => {return val + 3169}
    }, 
    trees: {
        value: 200, 
        res: (val) => {return val + 317}
    },
    searches: {
        value: 0, 
        res: (val) => {return val + 99000}
    }, 
    stars: {
        value: 0, 
        res: (val) => {return val + 60}
    }, 
    walking: {
        value: 0, 
        res: (val) => {return Math.round((val + 1.1)*100)/100}
    }, 
    lightspeed: {
        value: 0, 
        res: (val) => {
            return Math.round((val + 0.299792) * 100) / 100
        }
    },
    peopleBorn: {
        value: 0, 
        res: (val) => {return Math.round((val + 4.5)*100)/100}
    }, 
    peopleDied: {
        value: 0, 
        res: (val) => {return Math.round((val + 1.8)*100)/100}
    }, 
    hheartbeats: {
        value: 0, 
        res: (val) => {return Math.round((val + 1.8)*100)/100}
    }, 
    timeLost: {
        value: 0, 
        res: (val) => {return val + 1}
    }, 
    secondsLeft: {
        value: 39447000, 
        res: (val) => {return val}
    }, 
    tweets: {
        value: 0, 
        res: (val) => {return val + 4973}
    }, 
    youtubeWatches: {
        value: 0, 
        res: (val) => {return val + 57870}
    }, 
    earthTravels: {
        value: 0, 
        res: (val) => {return Math.round((val + 29.7)*100)/100}
    },
    reading: {
        value: 0, 
        res: (val) => {return Math.round((val + 0.016)*100)/100}
    }, 
    blinking: {
        value: 0, 
        res: (val) => {return Math.round((val + 0.29)*100)/100}
    },
    pulse: {
        value: 0, 
        res: (val) => {return Math.round((val + 1.16)*100)/100}
    },
    debt: {
        value: 0, 
        res: (val) => {return val + 11240}
    },
    strikes: {
        value: 0, 
        res: (val) => {return val + 100}
    },
    phones: {
        value: 0, 
        res: (val) => {return Math.round((val + 3.2)*100) /100}
    }
}


function updateData(){
    for(let i = 0; i < Object.keys(dataset).length; i++){
        dataset[Object.keys(dataset)[i]].value = dataset[Object.keys(dataset)[i]].res(dataset[Object.keys(dataset)[i]].value); 

        let value = dataset[Object.keys(dataset)[i]].value; 
        let stat = Object.keys(dataset)[i]; 
        let field = $(`#home-data-stat-${stat}`);

        field.text(()=>{return value})
    }

}


//Data field clicks 
let displayDesc; 

const dataField = $(".home-data-field"); 

dataField.on("mouseenter", (e) => {
    let stat = e.target.attributes['data-stat'].value;
    let statValue = $(`#home-data-stat-${stat}`);
    let statDesc = $(`#home-data-desc-${stat}`);

    statValue.css("transform", "translateY(-9vh)"); 

    displayDesc = setTimeout(() => {
       statDesc.addClass("home-data-desc-show");
    }, 200);
})
    

dataField.on("mouseleave", (e) => {
    clearTimeout(displayDesc);

    let stat = e.target.attributes['data-stat'].value;
    let statValue = $(`#home-data-stat-${stat}`);
    let statDesc = $(`#home-data-desc-${stat}`);

    statDesc.removeClass("home-data-desc-show");
    statValue.css("transform", "translateY(0vh)");
})