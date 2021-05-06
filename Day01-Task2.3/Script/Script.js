var Name;
var phone;
var mobile;
var email;
var today = new Date;
var color;
do {
    Name = prompt("Please, enter your Name.\r\nThe name should contain only character.");
} while (!((/[a-z]$/g).test(Name)));
do {
    phone = prompt("please,enter your phone.\r\nThe phone length should be 8 digit.");
}
while (!(/^[0-9]{8}$/g.test(phone)));
do {
    mobile = prompt("please,enter your mobile.\r\nThe mobile length should be 11 digit start with (010 or 011 012 or 015).");
}
while (!(/^01[0-2,5]{1}[0-9]{8}$/g.test(mobile)));
do {
    email = prompt("please,enter your Email.\r\nThe Email must contain @ and end with .com.");
}
while (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/g.test(email)));
do {
    color = prompt("Enter the color of text.\r\n(1)Red\n2)Green\n3)Blue");
} while (!(/^[1-3a-zA-z]/gi.test(color)));
switch (color) {
    case "1":
    case "red":
    case "Red":
        document.write("<spam class='red'>Wellcome dear guest </spam>" + Name);
        document.write("<br><spam class='red'>Your telephone number is </spam> " + phone);
        document.write("<br><spam class='red'>Your mobile number is </spam> " + mobile);
        document.write("<br><spam class='red'>Your email address is  </spam>" + email);
        document.write("<br><br><br><spam class='red'>Today is  </spam>" + today.toDateString());
        break;
    case "2":
    case "Green":
    case "green":
        document.write("<spam class='green'>Wellcome dear guest </spam>" + Name);
        document.write("<br><spam class='green'>Your telephone number is </spam> " + phone);
        document.write("<br><spam class='green'>Your mobile number is </spam> " + mobile);
        document.write("<br><spam class='green'>Your email address is  </spam>" + email);
        document.write("<br><br><br><spam class='green'>Today is  </spam>" + today.toDateString());
        break;
    case "3":
    case "blue":
    case "Blue":
        document.write("<spam class='blue'>Wellcome dear guest </spam>" + Name);
        document.write("<br><spam class='blue'>Your telephone number is </spam> " + phone);
        document.write("<br><spam class='blue'>Your mobile number is </spam> " + mobile);
        document.write("<br><spam class='blue'>Your email address is  </spam>" + email);
        document.write("<br><br><br><spam class='blue'>Today is  </spam>" + today.toDateString());
        break;

}