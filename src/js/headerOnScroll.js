import { throttle } from './utils';

const HEADER = document.querySelector('.header');
const BUY_BLOCK = document.querySelector('.buy-block__wrapper');

let lastScroll = 0;

const handleHeaderOnScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    HEADER.classList.add('hidden')
    BUY_BLOCK.classList.remove('active-header')
  } else {
    HEADER.classList.remove('hidden')
    BUY_BLOCK.classList.add('active-header')
  }

  if (currentScroll < 50) {
    HEADER.classList.remove('hidden')
    BUY_BLOCK.classList.add('active-header')
  }

  lastScroll = currentScroll;
}

window.addEventListener('scroll', throttle(handleHeaderOnScroll, 500))
