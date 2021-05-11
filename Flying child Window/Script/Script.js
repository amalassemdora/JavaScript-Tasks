var win;
var o_w = window.outerWidth;
var o_h = window.outerHeight;
var x = o_w / 10;
var y = o_h / 12;
var count = 0;

//function to open window
function openWin() {
    win = open("child.html", "", "width=150,height=150");
    win.focus();
    moveWin();
}

//function of start moving window
function moveWin() {
    setInterval(function() {
        if (count < 9) {
            win.moveBy(x, y);
        } else {
            win.moveBy(-x, -y);
        }
        count++;
        if (count === 18) {
            count = 0;
        }
    }, 1000);
    win.focus();
}

//function of closing window
function closeWin() {
    win.close();
}