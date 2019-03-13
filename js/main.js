'use strict';
function showModal() {
    document.getElementById('modal').classList.add("open");
}
function clouseModal() {
    var x = document.getElementsByClassName('open');
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("open")
    }
}