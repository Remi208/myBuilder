import "./markup-menu";
import $ from 'jquery';
global.$ = global.jQuery = $;
import svg4everybody from 'svg4everybody';
// import 'malihu-custom-scrollbar-plugin';
import 'jquery-mousewheel';
// import 'slick-carousel';
// import '@fancyapps/fancybox';

import Tabs from './components/tabs';
import Select from './components/select';
import selectsUpdate from './components/selects-update';
// import sliderCounter from './components/slider-counter';
// import sliders from './components/sliders';
// import adaptiveElemsHeight from './components/adaptive-elems-height';
// import accordion from './components/accordion';
// import mainNav from './components/main-nav';
// import popups from './components/popups';
// import animations from './components/animations';
// import slowAnchor from './components/slow-anchor';
// import adaptivePaddings from './components/adaptive-paddings';
// import responsiveRebuild from './components/responsive-rebuild';
// import inputFileLabel from './components/file-input-label';
// import video from './components/video';
// import initMap from './components/init-map';
// import map from './components/map';

document.addEventListener("DOMContentLoaded", () => {
  global.tabs = new Tabs();
  global.select = new Select();
  svg4everybody();
  // if(window.innerWidth > 1024){
  //   $('.custom-scroll').mCustomScrollbar();
  // }
  // if ($('#map').length) {
  //   initMap(map);
  // }

  selectsUpdate();
  // sliderCounter();
  // sliders();
  // accordion();
  // mainNav();
  // popups();
  // animations();
  // slowAnchor()
  // adaptivePaddings();
  // responsiveRebuild();
  // inputFileLabel();
  // video();

  // adaptiveElemsHeight('.elems-list', '.parent .child');
  
});

window.addEventListener("resize", () => {

  // adaptiveElemsHeight('.elems-list', '.parent .child');

});

window.addEventListener("scroll", () => {

});
