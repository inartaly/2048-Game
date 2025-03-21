document.addEventListener("DOMContentLoaded", () => {
  const board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

  function initGame() {
    // Initialize the game board with two random tiles.
    addRandomTile();
    addRandomTile();
    renderBoard();
  }

  function addRandomTile() {
    // Add a random tile to an empty cell.
  }

  function move(direction) {
    // Handle tile movements and merges.
  }

  function renderBoard() {
    const boardElement = document.getElementById("game-board");
    boardElement.innerHTML = "";
    board.forEach(row => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      row.forEach(cell => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("col", "s3", "tile");
        cellDiv.textContent = cell === 0 ? "" : cell;
        rowDiv.appendChild(cellDiv);
      });
      boardElement.appendChild(rowDiv);
    });
  }

  document.getElementById("restart-button").addEventListener("click", initGame);

  initGame();
});
