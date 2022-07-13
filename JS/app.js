const criarTimes = (evento) => {
  evento.preventDefault();

  /*Pegando o valor dos inputs e transformando em um array*/
  let input = document.querySelectorAll("[data-form-input]");
  let jogadores = [];

  /*Laço para gerar um array com todos os inputs */
  for (let i = 0; i < input.length; i++) {
    jogadores.push(input[i].value);
  }

  /*Gerando um jogador aleatório a partir do array de inputs*/
  let jogadoresMisturados = RandArray(jogadores);
  let timesDivididos = DividirTimes(jogadoresMisturados);

  /*Gerando o time atacantes*/
  let timeAtacantes = criarTimeAtacante(timesDivididos);
  let atacantes = document.querySelector("[data-timeAtacantes]");
  atacantes.appendChild(timeAtacantes);

  /*Gerando o time defensores*/
  let timeDefensores = criarTimeDefensor(timesDivididos);
  let defensores = document.querySelector("[data-timeDefensores]");
  defensores.appendChild(timeDefensores);

  /*Definindo os mapas disponíveis*/
  let mapas = ["Bind", "Haven", "Split", "Ascent", "Icebox", "Breeze", "Fracture"]
  let escolherMapa = selecionarMapa(mapas)
  let mapaEscolhido = criarMapa(escolherMapa)
  let mapa = document.querySelector("[data-mapa]")
  mapa.appendChild(mapaEscolhido)

  /*Verificação no console do navegador, caso necessário*/
  console.log(jogadores);
  console.log(jogadoresMisturados);
  console.log(timesDivididos);
  console.log(escolherMapa)
};

/*Função para gerar um jogador aleatório */
function RandArray(array) {
  let unico = [];
  let timeAleatorio = [];
  do {
    /*Gerando jogador aleatorio*/
    let rand = (Math.random() * array.length) | 0;
    let jogadorAleatorio = array[rand];
    /*Inserindo jogador gerado em um array*/
    timeAleatorio.push(jogadorAleatorio);
    /*Verificando se não haverá item repetido*/
    unico = timeAleatorio.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
  } while (unico.length < 10);

  return unico;
}

/*Dividindo o array unico em 2 arrays, gerando assim 2 times aleatorios*/
function DividirTimes(unico) {
  let times = [];
  let corte = 5;

  for (let i = 0; i < unico.length; i = i + corte) {
    times.push(unico.slice(i, i + corte));
  }

  return times;
}

function criarTimeAtacante(timesDivididos) {
  const atacante1 = timesDivididos[0][0];
  const atacante2 = timesDivididos[0][1];
  const atacante3 = timesDivididos[0][2];
  const atacante4 = timesDivididos[0][3];
  const atacante5 = timesDivididos[0][4];
  const linhaNovoTime = document.createElement("div");
  const conteudo = `
  <div class="atacantes_output">
    <h3 data-atc-titulo>Jogador 01:</h3>
    <p id="atacante1" class="atacantes_output-1" data-atac-output>${atacante1}</p>
  </div>
  <div class="atacantes_output">
    <h3 data-atc-titulo>Jogador 02:</h3>
    <p id="atacante2" class="atacantes_output-1" data-atac-output>${atacante2}</p>
  </div>
  <div class="atacantes_output">
    <h3 data-atc-titulo>Jogador 03:</h3>
     <p id="atacante3" class="atacantes_output-1" data-atac-output>${atacante3}</p>
  </div>
  <div class="atacantes_output">
    <h3 data-atc-titulo>Jogador 04:</h3>
    <p id="atacante4" class="atacantes_output-1" data-atac-output>${atacante4}</p>
  </div>
  <div class="atacantes_output">
    <h3 data-atc-titulo>Jogador 05:</h3>
    <p id="atacante5" class="atacantes_output-1" data-atac-output>${atacante5}</p>
  </div>
  `;

  linhaNovoTime.innerHTML = conteudo;

  return linhaNovoTime;
}

function criarTimeDefensor(timesDivididos) {
  const defensor1 = timesDivididos[1][0];
  const defensor2 = timesDivididos[1][1];
  const defensor3 = timesDivididos[1][2];
  const defensor4 = timesDivididos[1][3];
  const defensor5 = timesDivididos[1][4];
  const linhaNovoTime = document.createElement("div");
  const conteudo = `
  <div class="defensores_output">
    <h3 data-def-titulo>Jogador 01:</h3>
    <p id="defensor1" class="defensores_output-1" data-def-output>${defensor1}</p>
  </div>
  <div class="defensores_output">
    <h3 data-def-titulo>Jogador 01:</h3>
    <p id="defensor1" class="defensores_output-1" data-def-output>${defensor2}</p>
  </div>
  <div class="defensores_output">
    <h3 data-def-titulo>Jogador 01:</h3>
    <p id="defensor1" class="defensores_output-1" data-def-output>${defensor3}</p>
  </div>
  <div class="defensores_output">
    <h3 data-def-titulo>Jogador 01:</h3>
    <p id="defensor1" class="defensores_output-1" data-def-output>${defensor4}</p>
  </div>
  <div class="defensores_output">
    <h3 data-def-titulo>Jogador 01:</h3>
    <p id="defensor1" class="defensores_output-1" data-def-output>${defensor5}</p>
  </div>
  `;

  linhaNovoTime.innerHTML = conteudo;

  return linhaNovoTime;
}

function selecionarMapa(mapas) {
  let rand = (Math.random() * mapas.length) | 0;
  let mapaAleatorio = mapas[rand];

  return mapaAleatorio
}

function criarMapa(mapaAleatorio) {
  const mapa = mapaAleatorio
  const linhaNovoMapa = document.createElement("div");
  const conteudo = 
  `
  <h2 class="mapa_titulo">Mapa Selecionado</h2>
  <img src="IMG/BIND.png" alt="Mapa Bind do jogo Valorant" class="mapa_imagem">
  <p class="mapa_texto">${mapa}</p>
  `
  linhaNovoMapa.innerHTML = conteudo;

  return linhaNovoMapa;
}

const novosTimes = document.querySelector("[data-form-submit]");

novosTimes.addEventListener("click", criarTimes);
