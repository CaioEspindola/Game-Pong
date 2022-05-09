//Placar do Jogo
let pontosJogador1 = 0
let pontosJogador2 = 0

//Funções do placar
function incluirPlacar() {
  stroke(0)
  textAlign(CENTER)
  textSize(16)
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20)
  fill(255)
  text(pontosJogador1, 170, 26)
  fill(color(255, 140, 0))
  rect(410, 10, 40, 20)
  fill(255)
  text(pontosJogador2, 430, 26)

  if (pontosJogador1 >= 10) {
    trilhaSonora.stop()
    fill(color(255, 140, 0))
    rect(150, 100, 300, 200)
    fill(0)
    textSize(25)
    textFont('Verdana')
    text('Jogador 1 venceu!!!', 300, 200)
    xBolinha = 300
    yBolinha = 200
    velocidadexBolinha = 0
    velocidadexBolinha = 0
  }

  if (pontosJogador2 >= 10) {
    trilhaSonora.stop()
    fill(color(255, 140, 0))
    rect(150, 100, 300, 200)
    fill(0)
    textSize(25)
    textFont('Verdana')
    text('Jogador 2 venceu!!!', 300, 200)
    xBolinha = 300
    yBolinha = 200
    velocidadexBolinha = 0
    velocidadexBolinha = 0
  }
}

function marcaPonto() {
  if (xBolinha > 590) {
    pontosJogador1 += 1
    ponto.play()
  }

  if (xBolinha < 10) {
    pontosJogador2 += 1
    ponto.play()
  }
}
