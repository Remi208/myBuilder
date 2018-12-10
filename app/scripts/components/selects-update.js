export default () => {
  const selects = $('.select'),
        closeTriggers = $('body, html, .wrapper');

  closeTriggers.on('click',(event) => {
    if((event.target.closest('.select') == null) && (selects.hasClass('select--open'))){
      selects.removeClass('select--open');
    }
  });
}