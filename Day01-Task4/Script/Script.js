var radius = parseInt(prompt("What is the value of circle radius?"));
var area = Math.pow(radius, 2) * Math.PI;
alert("Total area of the circle is " + area);

var num = parseInt(prompt("What is the value you want to calculate its square root?"));
var sqr = Math.sqrt(num);
alert("Squar root of " + num + " is " + sqr);

var angle = parseInt(prompt("What is the angle you want to calculate its cos value?"));
var c = Math.cos(angle * Math.PI / 180);
alert("Squar root of " + angle + " is " + c.toFixed(4));