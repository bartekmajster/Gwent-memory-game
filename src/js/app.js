import $ from 'jquery';
import generateBoard from './modules/generateBoard';

const board = generateBoard();
const cards = $('.board__card');

function showCard() {
  const [index, item, box] = [this.id, $(this).find('.cont__back'), $(this).find('.creation')];
  item.css('background', `url('../../images/characters/${board[index]}.png')`);
  box.toggleClass('creation--active');
}

cards.on('click', showCard);
