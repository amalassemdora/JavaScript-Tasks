var win;
var count;

var text = "Egypt, officially the Arab Republic of Egypt, is one of the greatest, most interesting countries you will ever see. With all of its history, culture, culinary, religion, and versatile geography, Egypt has a special spot for everyone who gets to visit this magnificent place.";

//function to open child window and show text character by character
function openWin() {
    count = 0;
    win = open("Child.html", "", "width=500 height=300,top=200,left=300");
    setInterval(() => {
        if (count < text.length) {
            win.document.write(text.charAt(count));
            count++;
            if (count == text.length) {
                win.close();
            }
        }
    }, 200);
}
//function to close child window+
function closeWin() {
    win.close();
}