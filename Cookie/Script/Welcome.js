var elem, cookieName, cookieEmail, cookiePass, assArr;

function showData() {
    elem = document.getElementById("h1Wel");
    cookieName = document.cookie.split(";")[0].split("=")[1];
    cookieEmail = document.cookie.split(";")[1].split("=")[1];
    cookiePass = document.cookie.split(";")[2].split("=")[1];
    console.log(cookieName, cookieEmail, cookiePass);
    elem.innerText += " " + cookieName;
}

function GetAllCookies() {
    var elem = document.cookie.split(";");
    assArr = [];
    for (var i = 0; i < elem.length; i++) {
        assArr[elem[i].split("=")[0]] = elem[i].split("=")[1];

    }
    return assArr;
}