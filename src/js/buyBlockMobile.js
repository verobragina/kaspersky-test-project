const BUY_BLOCK_WRAPPER = document.querySelector('.buy-block__wrapper');
const BUY_BLOCK = document.querySelector('.buy-default__info');
const BUY_BLOCK_EXTENDED = document.querySelector('.buy-block__inner');
const BUY_BLOCK_DEFAULT = document.querySelector('.buy-block__inner-default');

const handleBuyBlockClick = () => {
  BUY_BLOCK_DEFAULT.classList.toggle('disabled');
  BUY_BLOCK_EXTENDED.classList.toggle('active');
  BUY_BLOCK_WRAPPER.classList.toggle('active');
}

const removeBuyBlockActiveClass = () => {
  if (BUY_BLOCK_EXTENDED.classList.contains('active')) {
    BUY_BLOCK_EXTENDED.classList.remove('active');
  }

  if (BUY_BLOCK_DEFAULT.classList.contains('disabled')) {
    BUY_BLOCK_DEFAULT.classList.remove('disabled');
  }

  if (BUY_BLOCK_WRAPPER.classList.contains('active')) {
    BUY_BLOCK_WRAPPER.classList.remove('active');
  }
}

BUY_BLOCK.addEventListener('click', handleBuyBlockClick)
window.addEventListener('resize', removeBuyBlockActiveClass)
