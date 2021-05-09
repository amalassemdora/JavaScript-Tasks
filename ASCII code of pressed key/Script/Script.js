function alertAscii(event) {
    if (event.shiftKey) {
        alert("The SHIFT key was pressed!");
    } else if (event.metaKey) {
        alert("The META key was pressed!");
    } else if (event.ctrlKey) {
        alert("The CTRL key was pressed!");
    } else if (event.altKey) {
        alert("The ALT key was pressed!");
    } else {
        alert("The ASCII Code of any key pressed is : " + event.keyCode);
    }
}