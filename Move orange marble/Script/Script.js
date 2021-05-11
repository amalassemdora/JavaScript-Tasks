var count = 2;
var x;
var y;
var timer;

function mouseOut() {

    timer = setInterval(function() {
        x = count;
        y = count - 1;
        if (x == 7) {
            x = 1;
            count = 1;
        }
        if (y == 0) {
            y = 6;
        }
        document.getElementById('img' + x).src = "../Images/marble2.jpg";
        document.getElementById('img' + y).src = "../Images/marble1.jpg";
        count++
    }, 500);
}

function mousover() {
    clearInterval(timer);

}