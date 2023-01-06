//about section
const aboutBtnL = $("#index-aboutSection-btn-toLeft"); 
const aboutBtnR = $("#index-aboutSection-btn-toRight");
let displayedInfo = 1;

aboutClick();
function aboutClick(){
    aboutBtnL.click(() => {
        if(displayedInfo == 1) displayedInfo = 4;
        else displayedInfo--;
        rotateLeft();
    });
    aboutBtnR.click(() => {
        if(displayedInfo == 4) displayedInfo = 1; 
        else displayedInfo++;
        rotateRight()
    });
}

const infoText_1 = $("#index-aboutSection-text-1");
const infoText_2 = $("#index-aboutSection-text-2");
const infoText_3 = $("#index-aboutSection-text-3");
const infoText_4 = $("#index-aboutSection-text-4");

function rotateRight(){
    switch(displayedInfo){
        case(1):{
            infoText_4.hide(); 
            infoText_1.show();
            break;
        }
        case(2):{
            infoText_1.hide(); 
            infoText_2.show();
            break;
        }
        case(3):{
            infoText_2.hide(); 
            infoText_3.show();
            break;
        }
        case(4):{
            infoText_3.hide(); 
            infoText_4.show();
            break;
        }
    }
}

function rotateLeft(){
    switch(displayedInfo){
        case(1):{
            infoText_2.hide(); 
            infoText_1.show();
            break;
        }
        case(2):{
            infoText_3.hide(); 
            infoText_2.show();
            break;
        }
        case(3):{
            infoText_4.hide(); 
            infoText_3.show();
            break;
        }
        case(4):{
            infoText_1.hide(); 
            infoText_4.show();
            break;
        }
    }
    
}
