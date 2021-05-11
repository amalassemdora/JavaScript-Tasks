function alertAscii(event) {
    switch (event.keyCode) {
        case 16:
            alert("The SHIFT key was pressed!");
            break;
        case 17:
            alert("The CTRL key was pressed!");
            break;
        case 18:
            alert("The ALT key was pressed!");
            break;
        default:
            alert("The ASCII Code of any key pressed is : " + event.keyCode);
            break;
    }
}