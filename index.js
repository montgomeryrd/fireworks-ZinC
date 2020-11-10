'use strict';

let t = 0;
let canvas = document.querySelector("canvas");
let $ = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
$.fillStyle = 'hsla(0, 0%, 0%, 1)';

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, false);

function draw() {
    $.globalCompositeOperation = 'source-over';
    $.fillStyle = 'hsla(0, 0%, 0%, .1)';
    $.fillRect(0, 0, canvas.width, canvas.height);
    let foo, i, r;
    foo = Math.sin(t) * 2 * Math.PI;
    for (i = 0 ; i < 400 ; ++i) {
        r = 400 * Math.sin(i * foo);
        $.globalCompositeOperation = '';
        $.fillStyle = 'hsla(' + i + 12 + ', 100%, 60%, 1)';
        $.beginPath();
        $.arc(Math.sin(i) * r + (canvas.width / 2), Math.cos(i) * r + (canvas.height / 2), 1.5, 0, Math.PI * 2);
        $.fill();
    }
    t += 0.000005;
    return t %= 2 * Math.PI;
};

function run() {
    window.requestAnimationFrame(run);
    draw();
}

run();