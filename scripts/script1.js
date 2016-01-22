setTimeout("document.getElementById('robot1').style.right = '0px';", 50);
setTimeout("document.getElementById('bulle1').style.color = 'white';", 800);
setTimeout("document.getElementById('bulle1').style.display = 'block';", 600);
setTimeout("document.getElementById('bulle1').style.width = '45%';", 500);
setTimeout("document.getElementById('main').style.display = 'block';", 1000);

adapt("bulle1", 20);
window.onresize = function(){
adapt("bulle1", 20);
}

document.getElementById('bulle1').style.background = "transparent";
document.getElementById('bulle1').innerHTML = "Salutations chers internautes! Je suis Alpha#1, un robot programmé parmis d'autres pour vous diriger dans cette aventure. Préparez-vous à entamer un voyage extraordinaire dans le monde passionant de la programmation informatique! Mais avant cela, vérifiez que vous ayez une bonne connexion réseau, en effet ce que vous allez voir demande une bonne dose d'énergie. Sur ce, je vous laisse découvrir ce qui vous attend.<br /> Appuyez n'importe où sur l'écran pour continuer...";

document.getElementById('alpha').onclick = function(){
window.location = 'http://localhost:8888/histoire/histoire.php';}