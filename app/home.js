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
        res: (val) => {return val + 12}
    }, 
    trees: {
        value: 236363, 
        res: (val) => {return Math.round(val + (val * 0.01))}
    },
    animals: {
        value: 0, 
        res: (val) => {return val + 486}
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
    console.log(`Entered on ${stat}`);
})
    

dataField.on("mouseleave", (e) => {
    clearTimeout(displayDesc);
    let stat = e.target.attributes['data-stat'].value;
    let statValue = $(`#home-data-stat-${stat}`);
    let statDesc = $(`#home-data-desc-${stat}`);
    statDesc.removeClass("home-data-desc-show");
    statValue.css("transform", "translateY(0vh)");
    console.log(`Left off ${stat}`);
})