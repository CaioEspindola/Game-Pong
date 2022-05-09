//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variavel da colisão
let colidiu = false

//Funções da Bolinha
function mostraBolinha () {
  
   circle (xBolinha, yBolinha , diametro)
}

function movimentaBolinha() {
  
   xBolinha += velocidadeXBolinha
   yBolinha += velocidadeYBolinha   
}

function bolinhaNaoFicaPresa(){
  
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

function verificaColisaoBorda() {  
 
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1        
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
  }
}