const lugarOcultoPath = "../../assets/svg/LugarOculto.svg";
const lugarEscolhidoPath = "../../assets/svg/LugarEscolhido.svg";

const defaultBoardState = Array(25).fill(lugarOcultoPath);
let currentBoardState = [];

// Função para embaralhar o array de lugares
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função para criar e carregar o tabuleiro
function loadBoard(lugares) {
  const gridContainer = document.getElementById("minesweeper");
  gridContainer.innerHTML = "";

  lugares.forEach((lugar) => {
    const square = document.createElement("div");
    square.classList.add("square");

    const img = document.createElement("img");
    img.src = lugar;
    img.alt = "Lugar";

    square.appendChild(img);
    gridContainer.appendChild(square);
  });

  currentBoardState = lugares;
}

// Função para salvar o estado atual do tabuleiro no localStorage
function saveBoardState() {
  localStorage.setItem("boardState", JSON.stringify(currentBoardState));
}

// Função para criar um novo jogo
function initializeNewGame() {
  let lugares = defaultBoardState.slice();
  lugares[0] = lugares[1] = lugares[2] = lugarEscolhidoPath;
  shuffleArray(lugares);
  currentBoardState = lugares;
  loadBoard(lugares);
  saveBoardState();
}

// Função para carregar o jogo salvo ou criar um novo jogo se não houver jogo salvo
function loadGame() {
  const savedBoardState = localStorage.getItem("boardState");

  if (savedBoardState) {
    const lugares = JSON.parse(savedBoardState);
    loadBoard(lugares);
    currentBoardState = lugares;
  } else {
    initializeNewGame();
  }
}

// Função para gerar um novo tabuleiro
function newGame() {
  initializeNewGame();
}

// Chama a função correta inicialmente (carrega o jogo salvo ou cria um novo jogo)
const savedBoardState = localStorage.getItem("boardState");
if (savedBoardState) {
  loadGame(); // Carrega o jogo salvo
} else {
  newGame(); // Cria um novo jogo
}

// Adicione o evento de clique no botão "Novo Jogo" para chamar a função newGame()
const newGameButton = document.getElementById("newGameBtn");
newGameButton.addEventListener("click", newGame);
