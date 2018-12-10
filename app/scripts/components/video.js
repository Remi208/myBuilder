export default () => {
  const btn = $('.ico-play'),
        video = $('video');

  btn.on('click', function(){
    const thisVideo = $($(this).closest('.video-block')).find(video);

    video.each(function(){
      this.pause();
    });
    btn.css({
      'opacity': '1',
      'visibility': 'visible'
    });
    if(thisVideo.length && thisVideo[0].paused){
      thisVideo[0].play();
      $(this).css({
        'opacity': '0',
        'visibility': 'hidden'
      });
    }
  });

  video.on('click', function(){
    if(!$(this)[0].paused){
      $(this)[0].pause();
      btn.css({
        'opacity': '1',
        'visibility': 'visible'
      });
    }
  });
}