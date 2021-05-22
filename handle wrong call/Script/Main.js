var win, userName, userAge, userGender, usercolor, gender1;
var check;

function OpenWindow() {
    userName = document.getElementById("name").value;
    console.log(userName);
    userAge = document.getElementById("age").value;
    console.log(userAge);
    userGender = document.getElementsByClassName("gender");
    usercolor = document.getElementById("colorMenu").value;
    console.log(usercolor);

    for (var i = 0; i < userGender.length; i++) {
        if (userGender[i].checked) {
            gender1 = userGender[i].value;
            console.log(gender1);
        }
    }
    var date = new Date();
    date.setMonth(date.getMonth() + 1);
    setCookie("USERNAME", userName, date);
    setCookie("USERAGE", userAge, date);
    setCookie("USERGENDER", gender1, date);
    setCookie("USERGCOLOR", usercolor, date);

    location.assign("WelcomePage.html");
}