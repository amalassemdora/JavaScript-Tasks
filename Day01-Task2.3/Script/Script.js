var Name;
var phone;
var mobile;
var email;
var today = new Date;
do {
    Name = prompt("Please, enter your Name.\r\nThe name should contain only character.");
} while (!(/[A-za-z]||[A-za-z]+\s[A-za-z]/g.test(Name)));
do {
    phone = prompt("please,enter your phone.\r\nThe phone length should be 8 digit.");
}
while (!(/^[0-9]{8}$/g.test(phone)));
do {
    mobile = prompt("please,enter your mobile.\r\nThe mobile length should be 11 digit start with (010 or 011 012 or 015).");
}
while (!(/^[010||011||012||015]{3}[0-9]{8}$/g.test(mobile)));
do {
    email = prompt("please,enter your Email.\r\nThe Email must contain @ and end with .com.");
}
while (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/g.test(email)));

document.write("<spam class='text'>Wellcome dear guest </spam>" + Name);
document.write("<br><spam class='text'>Your telephone number is </spam> " + phone);
document.write("<br><spam class='text'>Your mobile number is </spam> " + mobile);
document.write("<br><spam class='text'>Your email address is  </spam>" + email);
document.write("<br><br><br><br><spam class='text'>Today is  </spam>" + today.toDateString());