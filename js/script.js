
var btnopen = document.getElementsByClassName('modal-btn');
var mapopen = document.getElementsByClassName('open-map');
var btnclose = document.getElementsByClassName('modal-close');
var write = document.getElementsByClassName('write-us');
var map = document.getElementsByClassName('map');
btnopen[0].onclick = function() {
  write[0].classList.add('visual');
}
mapopen[0].onclick = function() {
  map[0].classList.add('visual');
}
btnclose[0].onclick = function() {
  write[0].classList.remove('visual');
}
btnclose[1].onclick = function() {
  map[0].classList.remove('visual');
}
