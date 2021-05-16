function showData() {
    // var allCookies= GetAllCookies();
    var name1 = GetCookie("USERNAME");
    var email1 = GetCookie("USEREMAIL");
    var elemH = document.getElementById("h1Wel");
    elemH.innerText += " " + name1 + " & Your Email : " + email1;
}