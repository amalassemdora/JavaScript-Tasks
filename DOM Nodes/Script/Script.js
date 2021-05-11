function colon() {
    var ele = document.getElementById('header');
    ele.remove();
    addTop();
    document.getElementById('navigation').style.paddingTop = '239px';
    document.getElementById('nav').style.listStyleType = 'circle';
    addBottom();

}

function addTop() {
    var img = document.createElement('img');
    img.src = '../Images/dom.jpg';
    var y = document.getElementById('topright');
    y.appendChild(img);
}

function addBottom() {
    var img = document.createElement('img');
    img.src = '../Images/dom.jpg';
    var x = document.getElementById('bottomleft');
    x.appendChild(img);
}