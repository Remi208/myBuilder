export default () => {
  $('.anchor').on('click', function () {
    $('html, body').animate({
      scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);

    return false;
  });
}