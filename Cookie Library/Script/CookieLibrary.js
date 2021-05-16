function SetCookie(cookieName, cookieValue, date) {
    if (date) {
        document.cookie = cookieName + " = " + cookieValue + "; expires=" + date;
    } else {
        //date = new Date();
        document.cookie = cookieName + " = " + cookieValue + ";expires=" + date;
    }
}

function GetAllCookies() {
    var elements = document.cookie.split(";");
    var AssArray = [];
    for (let i = 0; i < elements.length; i++) {
        AssArray[elements[i].split("=")[0].trim()] = elements[i].split("=")[1];
    }
    return AssArray;
}

function GetCookie(cookieName) {
    var allCookies = GetAllCookies();
    var myCookie = allCookies[cookieName];
    return myCookie;
}