//variaveis da Raquete Jogador 1
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;


//variaveis da Raquete Jogador 2
let xRaquete2 = 585
let yRaquete2 = 150;
let wRaquete2 = 10;
let hRaquete2 = 90;
let velocidadeYJogador2;

// chance de erro do Jogador 2
let chanceDeErrar = 0;

//Funções das Raquetes
function mostraRaqueteJogador1() {
  rect (xRaquete, yRaquete, wRaquete, hRaquete)
}

function movimentarRaqueteJogador1() {
  
  
 if (keyIsDown(87)) {
    yRaquete -= 5;
  }
  
   if (keyIsDown(83)) {
    yRaquete += 5;
  }
  
}

function mostraRaqueteJogador2() {
  rect (xRaquete2, yRaquete2, wRaquete2, hRaquete2)
}

//Modo contra o computador.
function movimentarRaqueteJogador2() {
  
    velocidadeYJogador2 = yBolinha - yRaquete2 - wRaquete / 2 - 30;  
    yRaquete2 += velocidadeYJogador2 + chanceDeErrar;
    calculaChanceDeErrar();

}

function calculaChanceDeErrar() {
  
  if (pontosJogador2 >= pontosJogador1) {
    chanceDeErrar += 10;
    if (chanceDeErrar >= 39){
      chanceDeErrar = 40;      
    }
    
  } else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 35){
      chanceDeErrar = 35;
    }
  }
}

//Modo multiplayer.
function movimentarRaqueteJogador2() {
  
  
 if (keyIsDown(UP_ARROW)) {
   yRaquete2 -= 5;
  }
  
   if (keyIsDown(DOWN_ARROW)) {
    yRaquete2 += 5;
  }
  
}

function verificaColisaoRaquete() {
  
  if (xBolinha - raio < xRaquete + wRaquete 
    && yBolinha - raio < yRaquete + hRaquete 
    && yBolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
    raquete1.play();
  } 
}

function verificaColisaoRaquete2(x,y) {
   colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquete2.play();
  }

}

//Descrição para os Jogadores
function descricaoJogador() {
  stroke (0)
  textAlign (CENTER)
  textSize (11);
  fill (color(255, 140, 0))
  rect (150, 370, 300, 30)
  fill (255);
  text ("Jogador: 1 use teclas W para cima e S para baixo\nJogador: 2 use as setas para cima e baixo", 300, 382);
}

