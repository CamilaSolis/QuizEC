var position=1;

function der(){
  document.getElementById("a"+position).src="img/negra.jpg"
  position+=1 //posicion de uno en uno
  document.getElementById("a"+position).src="img/zRERkjv.gif"
}
function izq(){
  document.getElementById("a"+position).src="img/negra.jpg"
  position-=1 //posicion de uno en uno
  document.getElementById("a"+position).src="img/zRERkjv.gif"
}
function ab(){
  document.getElementById("a"+position).src="img/negra.jpg"
  position+=10 //posicion de 10 en 10
  document.getElementById("a"+position).src="img/zRERkjv.gif"
}
function arr(){
  document.getElementById("a"+position).src="img/negra.jpg"
  position-=10 //posicion de 10 en 10
  document.getElementById("a"+position).src="img/zRERkjv.gif"
}

function compruebaTecla (evento) {
var keyCode = document.layers ? evento.which : document.all ? event.keyCode : document.getElementById ? evento.keyCode : 0;


  if (keyCode == 39){
 return der();}
  else if (keyCode == 40)
 {return ab();}
  else if (keyCode == 38)
 {return arr();}
  else if (keyCode == 37)
 {return izq();}
  return true;
}


function MarcaCheck () {
elemento = document.getElementById('obj');
    if (elemento.type == "checkbox")
    {
    elemento.checked = true
    }
}


window.onkeydown = compruebaTecla;
