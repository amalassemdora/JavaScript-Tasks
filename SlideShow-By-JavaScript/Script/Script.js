//function of next image
var count = 1;

function nextImg() {
    if (!(count == 6)) {
        document.getElementById("img").src = ("../Images/" + ++count + ".jpg");
    }
}

//function previous Image

function previousImg() {
    if (!(count == 1)) {
        document.getElementById("img").src = ("../Images/" + --count + ".jpg");
    }
}

//function SlideShow

var timer;

function slideShow() {
    clearInterval(timer);
    timer = setInterval(function() {
        if (count == 6) {
            count = 0;
        }
        document.getElementById("img").src = ("../Images/" + ++count + ".jpg");

    }, 2000);
}
//function stop slideshow
function stopSlide() {
    clearInterval(timer);
}