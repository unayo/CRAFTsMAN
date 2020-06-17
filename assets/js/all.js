"use strict";

$(document).ready(function () {
  console.log('Hello Bootstrap4');
});
$(function () {
  // 漢堡按鈕
  $('#off-canvas-id').offcanvas({
    modifiers: 'left, overlay',
    // default options
    triggerButton: '.js-offcanvas-trigger' // btn to open offcanvas

  }); // Initialize Swiper

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    // // 要不要置中
    // centeredSlides: true,
    //偏移
    slidesOffsetBefore: 85,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});
//# sourceMappingURL=all.js.map
