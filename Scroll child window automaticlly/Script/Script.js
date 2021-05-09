var win;

function openWin() {
    win = open("Child.html", "", "width=200, height=200,top=200,left=300");

    setInterval(() => {
        win.scrollBy(0, 50);
    }, 200);

}
//function to close child window+
function closeWin() {
    win.close();
}