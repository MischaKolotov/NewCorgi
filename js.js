function zapoln(){
var a=document.getElementById("input_1").value;
var b=document.getElementById("input_2").value;

document.getElementById("summa_1").innerHTML=+a + +b;
document.getElementById("proizvedenie_1").innerHTML=+a * +b;
document.getElementById("chastnoe_1").innerHTML=+a / +b;
document.getElementById("raznost_1").innerHTML=+a - +b;
}

