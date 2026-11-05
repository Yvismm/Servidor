let idades = [18,19];
console.log(idades);

idades.push(20);
console.log(idades);

idades.pop();

console.log(idades);
 
//let retangulo = {
 //   x: 10,
 //   y: 10,
  //  l: 50,
  //  a: 50,
  //  cor1: "blue",
   // cor2: "red"
//}

class retangulo2{
    constructor(x, y, l, a, cor1, cor2){
        this.x = x;
        this.y = y;
        this.l = l;
        this.a = a;
        this.cor1 = cor1;
        this.cor2 = cor2;
    }
    desenha(){
        ctx.beginPath();
        ctx.lineWidth=2;        
        ctx.fillStyle=this.cor1;       
        ctx.strokeStyle=this.cor2;    
        ctx.strokeRect (this.x, this.y,this.l, this.a) ;   
        ctx.fillRect (this.x, this.y,this.l, this.a);
        ctx.closePath();  
    }
}


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let r1 = new retangulo2(10, 10, 50, 50, "red", "blue");
let r2 = new retangulo2(340, 10, 50, 50, "green", "blue");
let r3 = new retangulo2(10, 340, 50, 50, "blue", "blue");

r1.desenha();
r2.desenha();
r3.desenha();

let aux = 1;

function animacao(){
    // apaga canvas
    ctx.clearRect(0,0,400,400);
    // move objeto
    if (r1.x == 350){
        aux = -1;
    }
    if(r1.x == 0){
        aux = 1;
    }


    r1.x += aux;

    // desenha objeto
    r2.desenha();
    
    requestAnimationFrame(animacao)
}


animacao();

let vel = 5;

document.addEventListener("keydown", function(evento){
 console.log(evento);
if (evento.key == "ArrowUp") { r2.y -= vel}
if (evento.key == "ArrowDown") { r2.y += vel}
if (evento.key == "ArrowLeft") { r2.x -= vel}
if (evento.key == "ArrowRight") { r2.x += vel}
})



document.addEventListener("mousemove", function(evento){
    console.log(evento);
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    r2.x = x_mouse;
    r2.y = y_mouse;
})