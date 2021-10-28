
var modal = document.getElementById("miModal");
var modal2 = document.getElementById("miModal2");
var modal3 = document.getElementById("miModal3");
var modal4 = document.getElementById("miModal4");
var modal5 = document.getElementById("miModal5");
var modal6 = document.getElementById("miModal6");


var btn = document.getElementById("miBoton");
var btn2 = document.getElementById("miBoton2");
var btn3 = document.getElementById("miBoton3");
var btn4 = document.getElementById("miBoton4");
var btn5 = document.getElementById("miBoton5");
var btn6 = document.getElementById("miBoton6");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
btn2.onclick = function(){
    modal2.style.display = "block";
}
btn3.onclick = function(){
    modal3.style.display = "block";
}
btn4.onclick = function(){
    modal4.style.display = "block";
}
btn5.onclick = function(){
    modal5.style.display = "block";
}
btn6.onclick = function(){
    modal6.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}
span2.onclick = function(){
    modal2.style.display = "none";
}
span3.onclick = function(){
    modal3.style.display = "none";
}
span4.onclick = function(){
    modal4.style.display = "none";
}
span5.onclick = function(){
    modal5.style.display = "none";
}
span6.onclick = function(){
    modal6.style.display = "none";
}