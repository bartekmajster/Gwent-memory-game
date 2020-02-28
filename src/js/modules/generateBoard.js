const cardsOptions = ['ciri', 'dandelion', 'geralt', 'iorweth', 'triss', 'yen'];
let board = [];

export default function generateBoard() {
  board = [];
  while (board.length !== 12) {
    const index = Math.floor(Math.random() * 6);
    let count = 0;
    board.forEach((item) => {
      if (item === index) count++;
    });
    if (count < 2) {
      board.push(index);
      count = 0;
    } else {
      count = 0;
    }
  }
  board = board.map((item) => cardsOptions[item]);

  return board;
}
