/*function Play(){
    for (let index = 0; index < 12; index++) {
        const element = array[index];
        
    }
}*/
var main = document.getElementsByClassName("main")[0],
    all_div = document.getElementsByTagName("div"),
    div,
    img;

var rArray = ['../Images/1.gif', '../Images/2.gif', '../Images/3.gif', '../Images/4.gif', '../Images/5.gif', '../Images/6.gif', '../Images/1.gif', '../Images/2.gif', '../Images/3.gif', '../Images/4.gif', '../Images/5.gif', '../Images/6.gif'];

function lettersFunction() {
    for (var i = 0; i <= 11; i = i + 1) {
        div = document.createElement("div");
        main.appendChild(div);
        img = document.createElement("img");
        img.setAttribute("src", rArray[i]);
        img.setAttribute("id", rArray[i]);
        div.appendChild(img);
    }

}
lettersFunction();



var x = [],
    flag = true;
for (var i = 0; i <= all_div.length - 1; i++) {
    all_div[i].onclick = function() {

        if (!flag) return;
        this.firstChild.style.opacity = "1";
        if (x.length == 0) {
            x[0] = this;
        } else if (x.length == 1) {
            x[1] = this;

        }

        if (x.length == 2) {
            flag = false;
            setTimeout(check, 700);

        }

    };

}
var try1 = 0;
var score = 0;

function check() {

    if (x[0].firstChild.id === x[1].firstChild.id) {
        score += 10;

    } else {
        try1++;
        x[0].firstChild.style.opacity = "0";
        x[1].firstChild.style.opacity = "0";

    }
    x = [];
    flag = true;
    document.getElementById("try").innerHTML = ('# Failed Try :' + try1);
    document.getElementById("score").innerHTML = ('Score : ' + score);
}