//Brightness modes 
const darkOverlay = $(".bodyfaker");
const themeToggle = $("#switch-btn");
const colorThemes = ['dark', 'light'];

//Load brightness
theme = localStorage.getItem("view_brightness");
if(!colorThemes.includes(theme)) localStorage.setItem("view_brightness", "dark"), theme = 'dark';

//Load initial theme
themeToggleState(theme);



toggleTheme();
function toggleTheme(){
    if(theme == 'dark'){
        themeToggle.click(() => { 
            theme = 'light';
            localStorage.setItem("view_brightness", theme);

            darkOverlay.hide();
            themeToggle.css({"left": "var(--themeToggle-offset-light)", "background-color":  "var(--themeToggle-color-light)"});
            toggleTheme();
        });
    }
    if(theme == 'light'){
        themeToggle.click(() => {  
            theme = 'dark';
            localStorage.setItem("view_brightness", "dark");
            
            darkOverlay.show();
            themeToggle.css({"left": "var(--themeToggle-offset-dark)", "background-color":  "var(--themeToggle-color-dark)"});
            toggleTheme();
        });
    }
}


function themeToggleState(theme){

    themeToggle.show();

    if(theme == 'dark'){
        themeToggle.addClass("switch-btn-transition");
    }
    if(theme == 'light'){
        themeToggle.css({"left": "var(--themeToggle-offset-light)", "background-color":  "var(--themeToggle-color-light)"});
        themeToggle.addClass("switch-btn-transition");
        darkOverlay.hide();
    }
}