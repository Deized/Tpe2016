var requete_ajax = new XMLHttpRequest();
var pageH = 0;
function NextChapt(wh){
document.getElementById("bod").style.cursor = "url('http://localhost:8888/images/chargement_s.gif')";
pageH = wh;
document.getElementById('robot').innerHTML = '<img src="http://localhost:8888/robots/Alpha2.png" style="position:absolute;height:160px;width:160px;">';
document.getElementById('bod').style.background = "url('H"+wh+".jpg')";
document.getElementById('bod').style.backgroundSize = "100% 100%";
document.getElementById('zbox').style.height = "57%";
requete_ajax.open('GET', 'Horga.php', false);
requete_ajax.send(null);
document.getElementById('zbox').innerHTML = requete_ajax.responseText;
requete_ajax.open('GET', 'H'+wh+'part1.php', false);
requete_ajax.send(null);
document.getElementById('boxn1').innerHTML = requete_ajax.responseText;
requete_ajax.open('GET', 'H'+wh+'part2.php', false);
requete_ajax.send(null);
document.getElementById('boxn2').innerHTML = requete_ajax.responseText;
document.getElementById('image_mobile1H1').style.background ="url('imobile1H"+wh+".jpg')";
document.getElementById('image_mobile2H1').style.background ="url('imobile2H"+wh+".jpg')";
document.getElementById('image_mobile1H1').style.backgroundSize = "100% 100%";
document.getElementById('image_mobile2H1').style.backgroundSize = "100% 100%";
adapt("boxn1", 20);
adapt("boxn2", 20);
}

requete_ajax.open('GET', 'http://localhost:8888/histoire/preamb.php', false);
requete_ajax.send(null);
document.getElementById('box_preamb').innerHTML = requete_ajax.responseText;

function appear(nb){
	var doc = "plus_info2";
	adapt(doc, 18);
	var marg_l = 10 * nb;
	document.getElementById(doc).style.display = "block";
	document.getElementById(doc).style.marginLeft = marg_l+"%";
	document.getElementById(doc).style.height = "100%";
if(nb == 0){
	document.getElementById('head1').innerHTML = "820";
	document.getElementById('bodi').innerHTML = "Al-Khwarizmi";
}
if(nb == 1){
	document.getElementById('head1').innerHTML = "1840";
	document.getElementById('bodi').innerHTML = "Ada Lovelace";
}
if(nb == 2){
	document.getElementById('head1').innerHTML = "1854";
	document.getElementById('bodi').innerHTML = "Boole";
}
if(nb == 3){
	document.getElementById('head1').innerHTML = "1950";
	document.getElementById('bodi').innerHTML = "Assembleur";
}
if(nb == 4){
	document.getElementById('head1').innerHTML = "1951";
	document.getElementById('bodi').innerHTML = "Compilateur";
}
if(nb == 5){
	document.getElementById('head1').innerHTML = "1957";
	document.getElementById('bodi').innerHTML = "FORTRAN";
}
if(nb == 6){
	document.getElementById('head1').innerHTML = "1971-1973";
	document.getElementById('bodi').innerHTML = "Langage C";
}
if(nb == 7){
	document.getElementById('head1').innerHTML = "1972";
	document.getElementById('bodi').innerHTML = "POO";
}
if(nb == 8){
	document.getElementById('head1').innerHTML = "1983";
	document.getElementById('bodi').innerHTML = "Langage C++";
}
}

function disapear(){
	document.getElementById("plus_info2").style.display = "none";
	document.getElementById('head1').innerHTML = "";
	document.getElementById('bodi').innerHTML = "";
}

window.onload = function(){adapt("box_preamb", 18);}
window.onresize = function(){if(pageH == 0){adapt("box_preamb", 18);}else{adapt("boxn1", 20);adapt("boxn2", 20);}}

function help(){
	document.getElementById('aide_text').style.display="block";
	document.getElementById('aide_text').style.width = "40%";
	setTimeout("document.getElementById('aide_text').style.color = 'white'", 200);
}

function helpOut(){
	document.getElementById('aide_text').style.display="none";
	document.getElementById('aide_text').style.width = "0%";
	setTimeout("document.getElementById('aide_text').style.color = 'transparent'", 0);
}