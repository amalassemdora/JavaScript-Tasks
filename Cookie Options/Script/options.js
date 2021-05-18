var menu, show;

function ShowSelected() {
    menu = document.getElementById("Menu");
    show = document.getElementById("h1forOption");
    show.innerHTML = "";
    //for one option
    // var indx = menu.selectedIndex;
    // show.innerHTML = menu.options[indx].text;
    for (let i = 0; i < menu.length; i++) {
        if (menu.options[i].selected) {
            show.innerHTML += menu.options[i].text + "<br>";
        }
    }
}