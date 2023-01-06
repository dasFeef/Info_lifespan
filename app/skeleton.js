//Sidebar 
const menu = $("#sidebar-btn");
const sidebar = $(".sidebar");

menuClick(); 

function menuClick(){
    menu.click(() => {
        menu.off("click");
        addSidebar();
    })
}

let sidebarIsOut = false; 

function addSidebar(){
    let width = window.innerWidth;
    let offset_out = "0vw"; 
    let offset_in = "-17vw"

    if(width < 1250) offset_out = "0vw", offset_in = "-40vw"

    if(!sidebarIsOut){
        sidebar.show().animate({right: offset_out}, 500);

        setTimeout(() =>{
            sidebar.css("position", "absolute");
            sidebarIsOut = true; 
            menu.click(menuClick());
        }, 500)
    } 
    else {
        sidebar.css("position", "fixed").animate({right: offset_in}, 500); 

        setTimeout(() => {
            sidebar.hide();
            sidebarIsOut = false; 
            menu.click(menuClick());
        }, 500);
    }
}



const navPaths = $("#sidebar-list"); 
const github = "https://github.com/dasFeef/Info_lifespan";
let lang = localStorage.getItem("system_lang"); 
let url = window.location.href; 

navPaths.click((e) => {
    let path = e.target.attributes['data-path'].value; 
    
    if(!lang) localStorage.setItem("system_lang", "de");
    if(lang == 'de'){
        if(!url.includes('/de')) window.location = `/de/${path}`;
        if(path == 'github') window.location = github;
        else window.location = path; 
    }

    if(lang == 'en' || url.includes('/en')){  
        localStorage.setItem("system_lang", "en") 
        if(!url.includes('/en/')) window.location = `/en/${path}`;
        if(path == 'github') window.location = github;
        else window.location = path; 
    }
});
