/*2.1. Write a script that accepts a string from user through prompt and
count the number of ‘e’ characters in it.*/
var text = prompt("Enter text : ");
var char = prompt("Enter the Character you want to count it: ");
var count = 0;

for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === char) {
        count++;
    }
}
alert("The number of " + char + " In ( " + text + " ) is : " + count);