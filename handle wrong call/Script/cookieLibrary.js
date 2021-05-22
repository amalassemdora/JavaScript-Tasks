function setCookie(cookieName, cookieValue, date) {
    if (arguments.length == 0) {
        try {
            var err1 = new Error("Argument Error");
            throw err1;
        } catch (e) {
            throw "Function should have at least two parameters.";
        }
    } else if (!cookieName) {
        try {
            var err1 = err1 = new Error("Argument Error");
            throw err1;
        } catch (e) {
            throw "Function should have a cookie name.";
        }
    } else if (!cookieValue) {
        try {
            var err1 = err1 = new Error("Argument Error");
            throw err1;
        } catch (e) {
            throw "Function should have a cookie value.";
        }
    } else if (date) {
        document.cookie = cookieName + "=" + cookieValue + "; expires=" + date + ";";
        console.log("This is a persistent cookie");
    } else {
        date = new Date();
        document.cookie = cookieName + "=" + cookieValue + ";";
        console.log("This is a session cookie");
    }

}

function allCookieList() {
    var elements = document.cookie.split(";");
    var AssArr = [];

    for (var i = 0; i < elements.length; i++) {
        AssArr[elements[i].split("=")[0].trim()] = elements[i].split("=")[1];
    }
    return AssArr;
}

function getCookie(cookiName) {
    if (arguments.length == 0) {
        try {
            var err1 = new Error("Argument Error");
            throw err1;
        } catch (e) {
            throw "You should enter the cookie name.";
        }
    } else {
        var allCookies = allCookieList();
        var myCookie = allCookies[cookiName.trim()];
        return myCookie;
    }
}

function deleteAllCookies() {
    var allCookies = allCookieList();
    var date = new Date();
    date.setMonth(date.setMonth() - 1);

    for (var i in allCookies) {
        document.cookie = cookiName + "=" + cookieValue + ";expires=" + date;
    }
}

function deleteCookie(cookieName) {
    if (arguments.length == 0) {
        try {
            var err1 = new Error("Argument Error");
            throw err1;
        } catch (e) {
            throw "You should enter the cookie name.";
        }
    } else {
        var date = new Date();
        date.setMonth(date.setMonth() - 1);
        document.cookie = cookiName + "=" + cookieValue + ";expires=" + date;
    }
}

function hasCookie(cookieName) {
    if (arguments.length == 0) {
        try {
            var err1 = new Error("Argument Error");
            throw err1;
        } catch (e) {
            throw "You should enter the cookie name.";
        }
    } else {
        var allCookies = allCookieList();
        if (allCookies[cookieName]) {
            alert = "This cookie is exsist.";
        } else {
            alert = "This cookie is not exsist.";
        }
    }
}