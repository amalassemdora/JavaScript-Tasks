var win, username1, email1, pass1, assArr;

var check;

function OpenWindow() {
    username1 = document.getElementById("usrname").value;
    email1 = document.getElementById("mail").value;
    pass1 = document.getElementById("pass").value;
    check = document.getElementById("chk");

    if (check.checked) {
        var date = new Date();
        date.setMonth(date.getMonth() + 1);
        SetCookie("USERNAME", username1, date);
        SetCookie("USEREMAIL", email1, date);
        SetCookie("USERPASS", pass1, date);

    } else {
        SetCookie("USERNAME", username1);
        SetCookie("USEREMAIL", email1);
        SetCookie("USERPASS", pass1);
    }
    location.assign("http://127.0.0.1:5500/HTML/Welcome.html");
}