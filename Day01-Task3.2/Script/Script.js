/*3.2. Fill an array (5 numerical values) from the user, Sort it in descending
and ascending orders then display the output as shown in Fig.*/

document.write("<h1>Sorting</h1><hr>");
var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = parseInt(prompt("Enter number " + (i + 1)))
}
document.write("<spam class='text'>U've entered the values of  </spam>" + arr);
document.write("<br><spam class='text'>Ur values after being sorted descending  </spam> " + arr.sort((a, b) => { return a - b }));
document.write("<br><spam class='text'>Ur values after being sorted ascending   </spam>" + arr.sort((a, b) => { return b - a }));