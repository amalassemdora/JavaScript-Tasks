var text = prompt("Enter the text ,please :")
document.write("<h1>Heading</h1><hr>")
for (var i = 1; i <= 6; i++) {
    document.write("<h" + i + ">" + text + " " + i + "<h" + i + ">");
}