export default () => {
  const trigger = $('.accordion-trigger');

  trigger.on('click', function(){
    const accordion = $(this).closest('.accordion'),
          allItems = accordion.find('.accordion-item'),
          allDropdowns = accordion.find('.accordion-content-holder');

    const item = $(this).closest('.accordion-item'),
          thisDropdown = item.find('.accordion-content-holder'),
          thisDropdownContent = item.find('.accordion-content'),
          setHeight = thisDropdownContent.outerHeight();

    if(!item.hasClass('active')){
      allItems.removeClass('active');
      allDropdowns.css('height', '0');
      item.addClass('active');
      thisDropdown.css('height', setHeight + 'px');
    } else {
      allItems.removeClass('active');
      allDropdowns.css('height', '0');
    }

  });
}