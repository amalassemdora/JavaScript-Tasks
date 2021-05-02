/*3.1. Fill an array of 3 elements from the user, and apply each of the
following mathematical operations on it (+, *, /).*/
document.write("<h1>Adding -- Multyplying -- Dividing 3 values </h1><hr>");
var arr = [];
for (var i = 0; i < 3; i++) {
    arr[i] = parseFloat(prompt("Enter number " + (i + 1)))
}
var sum = arr[0],
    mul = arr[0],
    div = arr[0];
for (var i = 1; i < 3; i++) {
    sum += arr[i];
    mul *= arr[i];
    div /= arr[i];
}
document.write("<spam class='text'>Sum of the 3 values </spam>" + arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + sum);
document.write("<br><spam class='text'>Multiplication of the 3 values is  </spam> " + arr[0] + " * " + arr[1] + " * " + arr[2] + " = " + mul);
document.write("<br><spam class='text'>Division of the 3 values of the 3 values  </spam>" + arr[0] + " / " + arr[1] + " / " + arr[2] + " = " + div);