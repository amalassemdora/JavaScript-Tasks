var win, username1, email1, pass1, assArr;
var date = new Date();
var check;

function OpenWindow() {
    username1 = document.getElementById("usrname").value;
    email1 = document.getElementById("mail").value;
    pass1 = document.getElementById("pass").value;
    check = document.getElementById("chk");
    date.setMonth(date.getMonth() + 1);


    if (check.checked) {
        document.cookie = "User Name = " + username1 + ";expires = " + date + ";";
        document.cookie = "Email = " + email1 + ";expires = " + date + ";";
        document.cookie = "Pass = " + pass1 + ";expires = " + date + ";";
    } else {
        document.cookie = "User Name = " + username1 + ";";
        document.cookie = "Email = " + email1 + ";";
        document.cookie = "Pass = " + pass1 + ";";
    }
    location.assign("http://127.0.0.1:5500/HTML/Welcome.html");

}

function GetAllCookies() {
    var elem = document.cookie.split(";");
    assArr = [];
    for (var i = 0; i < elem.length; i++) {
        assArr[elem[i].split("=")[0]] = elem[i].split("=")[1];

    }
    return assArr;
}