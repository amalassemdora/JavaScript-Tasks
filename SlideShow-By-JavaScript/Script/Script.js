//Function of number value
function EnterNumber(ourButton) {
    document.getElementById("Answer").value += ourButton.value.trim();
    ourButton.style.backgroundColor = "#53A7D8";
}
//Function of operation
function EnterOperator(ourButton) {
    document.getElementById("Answer").value += ourButton.value.trim();
    ourButton.style.backgroundColor = "#53A7D8";
}

//function clear
function EnterClear() {
    document.getElementById("Answer").value = "";
    ourButton.style.backgroundColor = "#53A7D8";
}

//reset color
function clickOut(ourButton) {
    ourButton.style.backgroundColor = "#EFEFEF";
}

//function equal
function EnterEqual() {
    var result = eval(document.getElementById("Answer").value);
    document.getElementById("Answer").value = result;
}