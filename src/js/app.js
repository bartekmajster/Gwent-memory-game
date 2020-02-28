import $ from 'jquery';
import generateBoard from './modules/generateBoard';

const board = generateBoard();
const cards = $('.board__card');

let prevCard;

function showCard() {
  const [index, item, box] = [this.id, $(this).find('.cont__back'), $(this).find('.creation')];
  item.css('background', `url('./images/characters/${board[index]}.png')`);
  box.toggleClass('creation--active');
  prevCard = board[index];
}

cards.on('click', showCard);

console.log(prevCard);
