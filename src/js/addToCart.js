const BUTTONS = document.querySelectorAll('.buy__button');
const VALUE = document.querySelector('.buy__dropdown-value');

const addToCart = () => {
  console.log('Added to cart:', {
    price: `${VALUE.dataset.currency}${VALUE.dataset.price}`,
    device: VALUE.dataset.device,
    period: VALUE.dataset.period
  })
}

BUTTONS.forEach(button => {
  button.addEventListener('click', addToCart)
})
