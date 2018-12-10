export default () => {
  const header = $('.header'),
        footer = $('.footer'),
        wrapper = $('.wrapper');

  wrapper.css({
    'padding-top': header.outerHeight() + 'px',
    'padding-bottom': footer.outerHeight() + 'px'
  });

}