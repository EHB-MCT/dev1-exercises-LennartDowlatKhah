"use strict"

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    let width = context.canvas.width;
    let height = context.canvas.width;


    drawrect(50, 400);
    drawrect(100, 300);
    drawrect(150, 200);
    drawrect(200, 100);

    function drawrect(pos, size){
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        console.log(r,g,b);
        let color= "rgb(" +r+ "," +g+ "," +b+ ")";

        context.fillStyle= color;
        context.fillRect(pos,pos,size,size);
}

