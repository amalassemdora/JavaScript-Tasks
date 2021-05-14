//  function start to calculat position of image
var countleft = 0;
var countright = 0;
var countbottom = 0;

function start() {
    var x = 1;

    var leftimg = document.getElementById("img1").offsetLeft;
    var rightimg = document.getElementById("img2").offsetLeft;
    var bottomimg = document.getElementById("img3").offsetTop;
    if (leftimg < 450) {
        leftimg = leftimg + x;
        document.getElementById("img1").style.left = leftimg + "px";
        countleft++;

    }
    rightimg = rightimg - x;
    if (rightimg >= 0) {
        document.getElementById("img2").style.left = rightimg + "px";
        countright++;

    }
    bottomimg = bottomimg - x;
    if (bottomimg >= 0) {
        document.getElementById("img3").style.top = bottomimg + "px";
        countbottom++;

    }
}
//function go to start moving images
function startmove() {
    start();
    my_time = setTimeout('startmove()', 10);

}

//function reset to stop moving images and back to first position
function resetmove() {
    console.log("left=" + countleft);
    console.log("right=" + countright);
    console.log("bottom=" + countbottom);
    clearTimeout(my_time);
    document.getElementById("img1").style.left = "0px";
    document.getElementById("img2").style.left = "450px";
    document.getElementById("img3").style.top = "470px";
}