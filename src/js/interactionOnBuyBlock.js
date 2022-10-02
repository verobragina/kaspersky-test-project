const BUTTONS = document.querySelectorAll('.buy__button');
const BUY_BLOCK = document.querySelector('.buy-block__wrapper');

const interactionOnBuyBlock = () => {
  if (BUY_BLOCK.getBoundingClientRect().top < 120) {
    console.log('** Interaction has taken place after buy block "pinned"')
  }
}

BUTTONS.forEach(button => {
  button.addEventListener('click', interactionOnBuyBlock)
})
