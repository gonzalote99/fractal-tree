function draw(xi, yi, xLen, yLen) {
  var c = document.getElementById("Canvas");
  var cRef = c.getContext("2d");
  cRef.moveTo(xi, yi);
  cRef.lineTo(xi+xLen, yi + yLen);
  cRef.stroke();
}

function fractal(x, y, length, rad, increment) {
if (length > 5) {
  length = length * 0.7;

  var radfM = rad + increment, radfm = rad - increment;

  var xadvanceM = Math.sin(radfM)*length, yadvanceM = Math.cos(radfM)*length;
  var xadvancem = Math.sin(radfm)*length, yadvancem = Math.cos(radfm)*length;

  draw(x, y, xadvanceM, -yadvanceM);
  fractal(x+ xadvanceM, y-yadvanceM, length, radfM, increment);
  draw(x, y, xadvancem, -yadvancem);
  fractal(x+ xadvancem, y-yadvancem, length, radfm, increment );



}
}

function clear() {
  var c = document.getElementById("Canvas");
  var cRef = c.getContext("2d");
  cRef.clearRect(0, 0, c.width, c.height)
}

function actualiza(thisvalue) {
document.getElementById("radianes").innerHTML = thisvalue/400 + " N rad";
clear();
var length = 75, rad = 0, increment = (Math.PI)*(thisvalue/400);
var c = document.getElementById("Canvas");
var cWidth = c.width;
var cHeight = c.height;
draw(cWidth / 2, cHeight/ 2, 0, -length)


fractal(cWidth/2, cHeight-length, length, rad, increment);
}