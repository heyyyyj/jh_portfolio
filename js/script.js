$(window).load(function(){
  $(window).scroll(function(){
      var wintop = $(window).scrollTop(), docheight = $('#wrap').height(),winheight = $(window).height();

      console.log(wintop);

      var totalScroll = (wintop/(docheight-winheight))*100;

      console.log("total scroll" + totalScroll);

      $(".progress-bar").css("width",totalScroll+"%");
  })
});

(function () {
  const wrapper = document.querySelector(".confetti");
  const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  const icons = [
  "🎉",
  "✨",
  "💜",
  "🖤",
  "👸🏻",
  "💻"];

  const iconCount = 18;
  var elements = [];

  init();

  function init() {
    for (let i = 0; i < iconCount; i++) {
      createIcon();
    }

    gsap.set(elements, {
      transformOrigin: "50% 50%",
      scale: 0 });

  }

  function createIcon(icon) {
    if (icon === null || icon === undefined) {
      icon = document.createElement("span");
      icon.classList.add("confetti__item");
      wrapper.appendChild(icon);
      elements.push(icon);
    }

    icon.innerText = gsap.utils.random(icons);
    if (isAnimationOk) animateIcon(icon);
  }

  function animateIcon(icon) {
    let durationFall = gsap.utils.random(1.75, 2.5);
    let durationFade = .3;
    let delay = gsap.utils.random(0, .75);
    let xDirection = gsap.utils.random(0, 1) > .5 ? 1 : -1;
    let x = (gsap.utils.random(0, window.outerWidth / 4) + 100) * xDirection;
    let tl = new gsap.timeline();

    tl.to(icon, {
      repeat: -1,
      delay: delay,
      keyframes: [{
        scale: 1,
        duration: .1 },

      {
        y: `random(${-window.outerHeight / 4}, 0)`,
        ease: Back.easeOut.config(5),
        duration: durationFall },

      {
        x: (gsap.utils.random(0, window.outerWidth / 4) + 100) * xDirection,
        ease: "Power1.easeOut",
        duration: durationFall,
        delay: -durationFall },

      {
        opacity: 0,
        scale: 4,
        ease: "Power1.easeOut",
        duration: durationFade,
        delay: -durationFade }] },

    "<");
  }
})();

/********** scroll fadein 스크롤 페이드인 **********/
$(document).ready(function() {
  $(window).scroll( function(){
      $('.fadein3').each( function(i){
          
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 4;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1'},1000);
        }
        
      });
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.right').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-right':'0'},1600);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.left').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'0'},1000);
          }
          
      }); 
  });
});

