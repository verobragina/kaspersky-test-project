import { currencyConverter } from './common';

const DROPDOWN = document.querySelector('.buy__dropdown');
const VALUE = DROPDOWN.querySelector('.buy__dropdown-value');
const CURRENT_PRICE = document.querySelector('.buy-block__price-current');
const BUY_BLOCK_MOBILE_DEFAULT = document.querySelector('.buy-default__devices');
const SELECT_CURRENCY_INPUT = document.querySelector('.dropdown_select');

const handleValueClick = (e) => {
  if (e.target.tagName === 'LI') {
    const LI = e.target;
    setNewValue(LI);
    setNewCurrentPrice(LI);
    setNewBuyBlockMobile(LI);
  }

  DROPDOWN.classList.toggle('active');
}

const setNewValue = (item) => {
  const device = item.dataset.device === '1' ? 'Device' : 'Devices';
  const period = item.dataset.period === '1' ? 'year' : 'years';

  VALUE.textContent = `${ item.dataset.device } ${ device }, ${ item.dataset.period } ${ period }`
  VALUE.dataset.device = item.dataset.device;
  VALUE.dataset.price = item.dataset.price;
  VALUE.dataset.period = item.dataset.period;
  VALUE.dataset.currency = currencyConverter[SELECT_CURRENCY_INPUT.value];
}

const setNewCurrentPrice = (item) => {
  CURRENT_PRICE.innerHTML = `${ item.dataset.currency }${ item.dataset.price.slice(0, -3) }.<span>${ item.dataset.price.slice(-2) }</span>`
}

const setNewBuyBlockMobile = (item) => {
  const device = item.dataset.device === '1' ? 'Device' : 'Devices';
  const period = item.dataset.period === '1' ? 'year' : 'years';

  const price = `<span class='buy-default__price'>${ item.dataset.currency }${ item.dataset.price }</span>`
  const description = `${ item.dataset.device } ${ device }, ${ item.dataset.period } ${ period }`

  BUY_BLOCK_MOBILE_DEFAULT.innerHTML = `${ price } - ${ description }`
}

DROPDOWN.addEventListener('click', handleValueClick)
