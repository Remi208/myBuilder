export default () => {
  const trigger = $('.trigger'),
        nav = $('.main-nav'),
        burger = $('.burger'),
        overlay = $('.overlay'),
        closeTrigger = $('.closeTriggers');


  trigger.on('click', () => {
    nav.addClass('active');
    burger.addClass('active');
    overlay.fadeIn(400);
  });

  closeTrigger.on('click', () => {
    nav.removeClass('active');
    burger.removeClass('active');
    overlay.fadeOut(400);
  });
}