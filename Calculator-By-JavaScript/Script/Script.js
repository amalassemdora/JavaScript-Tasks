//Function of number value
function EnterNumber(ourButton) {
    document.getElementById("Answer").value += ourButton.value.trim();
    ourButton.style.backgroundColor = "#53A7D8";
}
//function to dot
var countdot = 0;

function Enterdot(ourButton) {

    if (countdot == 0) {
        document.getElementById("Answer").value += ourButton.value.trim();
        ourButton.style.backgroundColor = "#53A7D8";
        countdot++;
    }
}
//Function of operation
var countoperator = 0;

function EnterOperator(ourButton) {
    //if (getElementById("Answer").value[getElementById("Answer").value.length])
    if (countoperator == 0) {
        //var operator =ourButton.value.trim();
        document.getElementById("Answer").value += ourButton.value.trim();
        countoperator++;
        countdot = 0;
    }
    ourButton.style.backgroundColor = "#53A7D8";
}

//function clear
function EnterClear(ourButton) {
    document.getElementById("Answer").value = "";
    ourButton.style.backgroundColor = "#53A7D8";
}

//reset color
function clickOut(ourButton) {
    ourButton.style.backgroundColor = "#EFEFEF";
}

//function equal
function EnterEqual() {
    try {
        var x = document.getElementById("Answer").value;
        var result = eval(document.getElementById("Answer").value);
        document.getElementById("Answer").value = result;
        countoperator = 0;
        countdot++;
    } catch (err) {
        countoperator = 0;
        countdot = 0;
        alert("Error Message\nThe operation must be in form of [ operand 1 (operator) operand 2 ].");
    }
}

/*
function checkoperation(r) {
    alert("Hello!!!!!.");
    if (r.contains("..") | r.contains(".+") | r.contains(".-") | r.contains(".*") | r.contains("./") | r.contains("++") | r.contains("--") | r.contains("**") | r.contains("//")) {
        alert("Error Message\nThe String can't contain 2 operation side by side.");

    }
}*/