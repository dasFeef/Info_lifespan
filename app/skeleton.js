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


//URL rewrites
const navPaths = $("#sidebar-list"); 
const github = "https://github.com/dasFeef/Info_lifespan";
let lang = localStorage.getItem("system_lang"); 
let url = window.location.href; 
let site = $("body").attr("name");

navPaths.click((e) => {
    site = e.target.attributes['data-path'].value;
    if(site == 'github') return window.location = github;
    return window.location = `${site}`;
})

//make sure the language is set
if(!lang) localStorage.setItem("system_lang", "de"), lang = "de";

//rewrite url (if necessary) after initial page load
if(!url.includes('/de') && !url.includes('/en')){
    window.location = `/${lang}/${site}`
}
else{
    if(url.includes('/de') && lang !== 'de'){
        localStorage.setItem("system_lang", "de"), lang = "de";
        window.location = window.location = `/${lang}/${site}`;
    }
    if(url.includes('/en') && lang !== 'en'){
        localStorage.setItem("system_lang", "en"), lang = "en";
        window.location = window.location = `/${lang}/${site}`;
    }
}