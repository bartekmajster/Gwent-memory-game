import $ from 'jquery';
import generateBoard from './modules/generateBoard';

const board = generateBoard();
const cards = $('.board__card');
let filterCards = [];
let turn = 0;
let score = 6;

function checkPair() {
  filterCards = board.filter((card) => card.active);

  if (filterCards.length === 2) {
    turn++;
    if (filterCards[0].name === filterCards[1].name) {
      setTimeout(() => {
        $('.creation--active').css('display', 'none');
        score--;
        filterCards = [];
      }, 1000);
      for (let i = 0; i < 12; i++) {
        board[i].active = false;
      }
    } else {
      for (let i = 0; i < 12; i++) {
        setTimeout(() => {
          board[i].active = false;
          $('.creation').removeClass('creation--active');
          filterCards = [];
        }, 1000);
      }
    }
  }
  console.log(filterCards);
}

function showCard() {
  if (filterCards.length === 2) return;

  const [index, item, box] = [this.id, $(this).find('.cont__back'), $(this).find('.creation')];
  item.css('background', `url('./images/characters/${board[index].name}.png')`);

  board[index].active = true;

  if (board[index].active) {
    box.addClass('creation--active');
  }

  checkPair();

  $('.score').html(`Turn counter: ${turn}`);
  console.log(score);
}

cards.on('click', showCard);
