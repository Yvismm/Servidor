const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 4a - UM quadrado em (x, y)
function desenhar_quadrado(x, y, lado, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, lado, lado);
    ctx.closePath();
}

// 4b - UMA linha de (x1, y1) até (x2, y2)
function desenhar_linha(x1, y1, x2, y2, cor) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

// 4c - UM arco com centro em (x, y), ângulos em graus
function desenhar_arco(x, y, raio, anguloIni, anguloFim, corBorda, corFundo) {
    ctx.beginPath();
    ctx.arc(x, y, raio, anguloIni * Math.PI / 180, anguloFim * Math.PI / 180);
    if (corFundo) {
        ctx.fillStyle = corFundo;
        ctx.fill();
    }
    ctx.strokeStyle = corBorda;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
}

// 4d - UM texto em (x, y)
function escrever(texto, x, y, cor, fonte) {
    ctx.fillStyle = cor;
    ctx.font = fonte;
    ctx.fillText(texto, x, y);
}

// ---------- 4e - figura do modelo ----------

// Quadrados dos cantos superiores
desenhar_quadrado(0, 0, 50, "blue");
desenhar_quadrado(250, 0, 50, "red");

// Texto
escrever("Canvas", 117, 48, "black", "20px Arial");

// Linhas diagonais (coloridas) e linhas em cruz (verdes)
desenhar_linha(50, 50, 150, 150, "blue");
desenhar_linha(250, 50, 150, 150, "red");
desenhar_linha(0, 150, 300, 150, "green");
desenhar_linha(150, 150, 150, 240, "green");

// Arcos de cima (semicírculos voltados para cima)
desenhar_arco(150, 150, 80, 180, 360, "green");
desenhar_arco(150, 150, 60, 180, 360, "green");

// Círculo ciano com borda azul
desenhar_arco(150, 113, 15, 0, 360, "blue", "cyan");

// Quadrado vermelho do meio
desenhar_quadrado(110, 150, 40, "red");

// Retângulos ciano (feitos com quadrados de 30)
desenhar_quadrado(0, 120, 30, "cyan");
desenhar_quadrado(0, 150, 30, "cyan");
desenhar_quadrado(270, 133, 30, "cyan");

// Círculos amarelos com borda verde
desenhar_arco(70, 217, 15, 0, 360, "green", "yellow");
desenhar_arco(220, 217, 15, 0, 360, "green", "yellow");

// Arcos de baixo
desenhar_arco(150, 300, 80, 180, 360, "green");
desenhar_arco(150, 300, 60, 180, 360, "green");

// Semicírculo ciano na base
desenhar_arco(150, 300, 40, 180, 360, "green", "cyan");

// Forma amarela (em L) no canto inferior esquerdo
desenhar_quadrado(0, 240, 30, "yellow");
desenhar_quadrado(0, 270, 30, "yellow");
desenhar_quadrado(30, 270, 30, "yellow");

// Forma preta (em L) no canto inferior direito
desenhar_quadrado(270, 240, 30, "black");
desenhar_quadrado(270, 270, 30, "black");
desenhar_quadrado(240, 270, 30, "black");