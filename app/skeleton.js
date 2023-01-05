//Sidebar 
const menu = $("#sidebar-btn");
const sidebar = $(".sidebar");

menuClick(); 
function menuClick(){
    menu.click(() => {
        menu.off("click");
        console.log("CLICK!");
        addSidebar();
    })
}

let sidebarIsOut = false; 
async function addSidebar(){

    if(!sidebarIsOut){

        sidebar.show().animate({right: "0vw"}, 500); 
        setTimeout(() =>{
            sidebar.css("position", "absolute");
            sidebarIsOut = true; 
            menu.click(menuClick());
        }, 500)
    } 
    else {

        sidebar.css("position", "fixed").animate({right: "-17vw"}, 500); 
        setTimeout(() => {
            sidebar.hide();
            sidebarIsOut = false; 
            menu.click(menuClick());
        }, 500);
    }
}



const navPaths = $("#sidebar-list"); 

navPaths.click((e) => {
    let path = e.target.attributes['data-path'].value; 
    let url = window.location.href; 
    let lang = localStorage.getItem("system_lang"); 

    if(!lang) localStorage.setItem("system_lang", "de");
    if(lang == 'de'){
        if(!url.includes('/de')) window.location = `/de/${path}`;
        else window.location = path; 
    }

    if(lang == 'en'){   
        if(!url.includes('/en3')) window.location = `/en/${path}`;
        else window.location = path; 
    }

})
