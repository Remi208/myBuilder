export default () => {

  const overlay = $('.overlay'),
        body = $('body'),
        closeTriggers = $('.popup-close, .overlay');

  const btnPopup = $('.btn-popup');

  const allPopups = $('.popup'),
        popupPopup = $('.popup-popup');

  btnPopup.on('click', () => {
    overlay.fadeIn(400, () => {
          popupPopup
              .css('display', 'block')
              .animate({opacity: 1}, 200);
      });
  });

  closeTriggers.on('click', () => {
    allPopups.animate({opacity: 0},
      200, () => {
            allPopups.css('display', 'none');
            body.removeClass('iosBugFixCaret');
            $('.overlay').fadeOut(400);
        }
    );
    
  });

  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua);
  const iOS11 = /OS 9_1|OS 11_0_1|OS 11_0_2|OS 11_0_3|OS 11_1|OS 11_1_1|OS 11_1_2|OS 11_2|OS 11_2_1/.test(ua);
  const triggerSet = $('.modal');
  if (iOS && iOS11) {
    triggerSet.on('click', () => {
      $('body').addClass('iosBugFixCaret');
    });
  }

}