var str = prompt("please enter the String");
var sensitive = confirm(" Are you consider case sensitivity of the entered string or not?");
str.split();
var flag;
if (str.length % 2 == 0) {
    if (sensitive) {
        flag = compare(str);
    } else {
        str = str.toLowerCase();
        flag = compare(str);
    }
} else {
    flag = false;
}

if (flag) {
    alert("The entered string is palindrome");

} else {
    alert("The entered string is not palindrome");

}

function compare(str) {
    for (var i = 0; i < (str.length / 2); i++) {
        if (str[i] === str[str.length - 1 - i]) {
            flag = true;
        } else {
            flag = false;
        }
    }
    return flag;
}