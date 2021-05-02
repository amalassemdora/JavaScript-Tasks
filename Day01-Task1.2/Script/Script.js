/*1.2. Write a script that takes from the user n values and returns their
sum, stop receiving values from user when he enters 0 or sum exceeds
100, check that the entered data is numeric and inform the user with
the total sum of the entered values.*/
var sum = 0;
do {
    var num = parseInt(prompt("Enter number \r\nSum =" + sum, ""));

    if (isFinite(num)) {
        sum += num;
    }
    if (num === 0) {
        break;
    }
}
while (sum < 100);
alert("Sum = " + sum);