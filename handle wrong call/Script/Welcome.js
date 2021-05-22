var x = 1;
var count = 0;
window.addEventListener(
    "unload",
    function() {
        count = parseInt(localStorage.getItem("counter") || 0);

        localStorage.setItem("counter", ++count);
    },
    false
);


function showData() {
    var y = x + 1;
    var name1 = getCookie("USERNAME");
    console.log(name1);
    var age = getCookie("USERAGE");
    var gender = getCookie("USERGENDER");
    console.log(gender);
    var color = getCookie("USERGCOLOR");
    console.log(color);
    var show1 = document.getElementById('weltxt');
    var j;
    if (gender == "male") {
        j = 1;
        show1.innerHTML = `<img src="../Images/1.jpg" alt="male" /><span>Welcome</span>
        <span style="color: ${color}; font-weight: bold"> Mr. ${name1}</span>
          you have visited this page for <span style=" color:${color}; font-weight:bold;"> ${localStorage.getItem(
     "counter"
   )}</span> times`;
    } else if (gender == "female") {
        j = 2;
        show1.innerHTML = `<img src="../Images/2.jpg" alt="male" /><span>Welcome</span>
        <span style="color: ${color}; font-weight: bold"> Ms. ${name1}</span>
          you have visited this page for <span style=" color:${color}; font-weight:bold;"> ${localStorage.getItem(
     "counter"
   )}</span> times`;
    }
}