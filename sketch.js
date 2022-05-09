function setup() {
  createCanvas(600, 400)
  trilhaSonora.loop()
}

function draw() {
  background(100)
  descricaoJogador()
  mostraBolinha()
  movimentaBolinha()
  verificaColisaoBorda()
  mostraRaqueteJogador1()
  movimentarRaqueteJogador1()
  verificaColisaoRaquete(xRaquete, yRaquete)
  mostraRaqueteJogador2()
  movimentarRaqueteJogador2()
  verificaColisaoRaquete2(xRaquete2, yRaquete2)
  incluirPlacar()
  marcaPonto()
}
