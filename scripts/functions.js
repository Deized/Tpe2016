function adapt(doc, dim){
longe = document.body.clientHeight;
larg = document.body.clientWidth;
// base 1300 / 700 -> 20px
// Pour 100px de moins -> dim px de moins.
add = longe + larg;
sous = 2000 - add;
divi = sous / 100;
new_size = dim - divi;
document.getElementById(doc).style.fontSize = new_size+"px";
}