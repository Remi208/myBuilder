export default () => {
  const $slickElement = $('.slider-with-counter');
  const $status = $('.slider-with-counter .counter');

  $slickElement.on('init reInit afterChange', (event, slick, currentSlide, nextSlide) => {
    const i = (currentSlide || 0) + 1;

    $status.html(
      `0${slick.currentSlide + 1}`
    );
  });
}