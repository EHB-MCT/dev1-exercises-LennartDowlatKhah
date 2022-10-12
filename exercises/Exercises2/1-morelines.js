"use strict";

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    let width = context.canvas.width;
    let height = context.canvas.width;

    let margin = 100
    let spacing = 80

    drawLine();

    function drawLine(){

        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(margin,spacing);
        context.lineTo(width-margin,spacing);
        context.lineTo(margin, spacing * 2)
        context.lineTo(width-margin,spacing*2)
        context.lineTo(margin,spacing*3)
        context.lineTo(width-margin, spacing *3)
        context.lineTo(margin,spacing)
        context.stroke();
    }
