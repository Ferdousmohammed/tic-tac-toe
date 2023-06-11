let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

function makeMove(cellIndex) {
  const cell = cells[cellIndex];
  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    if (checkWin(currentPlayer)) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else if (checkTie()) {
      alert('It\'s a tie!');
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(player);
    });
  });
}

function checkTie() {
  return Array.from(cells).every(cell => {
    return cell.textContent !== '';
  });
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  });
  currentPlayer = 'X';
}
