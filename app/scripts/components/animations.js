import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';

export default () => {
  const ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
  });

  // const advantages = new TimelineMax()
  // .add([
  //   TweenMax.staggerFrom('.our-advantages__tabs .tabs-list svg', .5, {'transform': 'rotateY(90deg)'}, .2)
  // ]);

  // if($('.our-advantages__tabs').length > 0) {
  //   const sceneAdvantagesTabs = new ScrollMagic.Scene({
  //     triggerElement: '.our-advantages__tabs',
  //     offset: -700
  //   })
  //   .setTween(advantages)
  //   sceneAdvantagesTabs.addTo(ctrl);
  // }

}