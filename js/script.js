slideDelivery.addEventListener('click', function () {
  console.log('Отображается слайд ДОСТАВКА');
  delivery.classList.add('slider-service__button--current');
  warranty.classList.remove('slider-service__button--current');
  credit.classList.remove('slider-service__button--current');
