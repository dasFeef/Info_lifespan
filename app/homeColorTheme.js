//Brightness modes 
const themeToggle = $("#switch-btn");
const colorThemes = ['dark', 'light'];
const body = $("#home-body");
const timer = $(".home-timer");
const data = $(".home-data");
const fields = $(".home-data-desc, .home-data-stat, .home-data-text");

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

            themeToggle.css({"left": "var(--themeToggle-offset-light)", "background-color":  "white"});
            body.removeClass("home-body-dark").addClass("home-body-light");
            timer.addClass("home-timer-light");
            data.addClass("home-data-light");
            fields.addClass("home-data-field-light");
            toggleTheme();
        });
    }
    if(theme == 'light'){
        themeToggle.click(() => {  
            theme = 'dark';
            localStorage.setItem("view_brightness", "dark");
            
            themeToggle.css({"left": "var(--themeToggle-offset-dark)", "background-color":  "black"});
            body.removeClass("home-body-light").addClass("home-body-dark");
            timer.removeClass("home-timer-light");
            data.removeClass("home-data-light");
            fields.removeClass("home-data-field-light");
            toggleTheme();
        });
    }
}


function themeToggleState(theme){

    themeToggle.show();

    if(theme == 'dark'){
        themeToggle.css("background-color", "black").addClass("switch-btn-transition");
        body.addClass("home-body-dark");
    }
    if(theme == 'light'){
        themeToggle.css({"left": "var(--themeToggle-offset-light)", "background-color":  "white"}).addClass("switch-btn-transition");
        body.addClass("home-body-light");
        timer.addClass("home-timer-light");
        data.addClass("home-data-light");
        fields.addClass("home-data-field-light");
    }
}