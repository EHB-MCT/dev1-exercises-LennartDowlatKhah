"use strict";

drawLine();

function drawLine() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    let context = canvas.getContext("2d");

    //L
    context.lineWidth = 8;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(100,400);
    context.stroke();

    
    context.lineWidth = 8;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(96,400);
    context.lineTo(200,400);
    context.stroke();

   //E
    context.lineWidth = 8;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(250,100);
    context.lineTo(250,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(250,100);
    context.lineTo(350,100);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(250,250);
    context.lineTo(350,250);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(250,400);
    context.lineTo(350,400);
    context.stroke();

    //N1
    context.lineWidth = 8;
    context.strokeStyle = "orange";
    context.beginPath();
    context.moveTo(400,100);
    context.lineTo(400,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "orange";
    context.beginPath();
    context.moveTo(400,100);
    context.lineTo(500,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "orange";
    context.beginPath();
    context.moveTo(500,100);
    context.lineTo(500,400);
    context.stroke();

    //N2
    context.lineWidth = 8;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(550,100);
    context.lineTo(550,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(550,100);
    context.lineTo(650,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(650,100);
    context.lineTo(650,400);
    context.stroke();

    //A
    context.lineWidth = 8;
    context.strokeStyle = "maroon";
    context.beginPath();
    context.moveTo(750,100);
    context.lineTo(700,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "maroon";
    context.beginPath();
    context.moveTo(750,100);
    context.lineTo(800,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "maroon";
    context.beginPath();
    context.moveTo(720,300);
    context.lineTo(780,300);
    context.stroke();

    //R
    context.lineWidth = 8;
    context.strokeStyle = "yellow";
    context.beginPath();
    context.moveTo(850,100);
    context.lineTo(850,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "yellow";
    context.beginPath();
    context.moveTo(850,100);
    context.lineTo(950,200);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "yellow";
    context.beginPath();
    context.moveTo(950,200);
    context.lineTo(850,300);
    context.lineTo(950,400)
    context.stroke();

    //T
    context.lineWidth = 8;
    context.strokeStyle = "cyan";
    context.beginPath();
    context.moveTo(1050,100);
    context.lineTo(1050,400);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = "cyan";
    context.beginPath();
    context.moveTo(1000,100);
    context.lineTo(1100,100);
    context.stroke();
}