import { currencyConverter } from './common';

const SELECT_CURRENCY_INPUT = document.querySelector('.dropdown_select');
const VALUE = document.querySelector('.buy__dropdown-value');
const CURRENT_PRICE = document.querySelector('.buy-block__price-current');
const CURRENT_PRICE_MOBILE = document.querySelector('.buy-default__price');
const OLD_PRICE = document.querySelector('.buy-block__price-old');
const DEVICES_LIST = document.querySelector('.buy__select');
const DEVICES = DEVICES_LIST.querySelectorAll('li');

const handleChangeCurrency = (e) => {
  const currency = currencyConverter[e.target.value];

  VALUE.dataset.currency = currency;

  CURRENT_PRICE.textContent = CURRENT_PRICE.innerText.replace(CURRENT_PRICE.dataset.currency, currency);
  CURRENT_PRICE.dataset.currency = currency;

  OLD_PRICE.textContent = OLD_PRICE.innerText.replace(OLD_PRICE.dataset.currency, currency);
  OLD_PRICE.dataset.currency = currency;

  DEVICES.forEach(itemLi => {
    itemLi.textContent = itemLi.innerText.replace(itemLi.dataset.currency, currency);
    itemLi.dataset.currency = currency;
  })

  CURRENT_PRICE_MOBILE.textContent = CURRENT_PRICE_MOBILE.innerText.replace(CURRENT_PRICE_MOBILE.dataset.currency, currency);
  CURRENT_PRICE_MOBILE.dataset.currency = currency;
}

SELECT_CURRENCY_INPUT.addEventListener('change', handleChangeCurrency);
