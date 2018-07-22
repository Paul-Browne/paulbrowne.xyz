var svg_1 = document.getElementById("svg_1");
var svg_2 = document.getElementById("svg_2");
var svg_3 = document.getElementById("svg_3");
var svg_4 = document.getElementById("svg_4");
var w = window.innerWidth;
var h = window.innerHeight;
window.addEventListener("mousemove", function(e){
    var x = e.clientX;
    var y = e.clientY;
    svg_1.style.fill = "rgb(0," + Math.round(100 * (x/w)) + "," + Math.round(100 * (y/h)) + ")";
    svg_2.style.fill = "rgb(255," + Math.round(255 - (100 * (y/h))) + "," + Math.round(255 - (100 * (x/w))) + ")";
    svg_3.style.fill = "rgb(0," + Math.round(100 * (y/h)) + "," + Math.round(100 * (x/w)) + ")";
    svg_4.style.fill = "rgb(255," + Math.round(255 - (100 * (x/w))) + "," + Math.round(255 - (100 * (y/h))) + ")";
});