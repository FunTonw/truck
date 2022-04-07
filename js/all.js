$(document).ready(function () {

   
  // 營運優勢:1
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 4,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  // 營運優勢:2
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // 營運優勢:3
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  //營運優勢:4
  var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

      // 協力團隊
      $(window).scroll(function() {
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        $('.picbox').each(function() { 
               var bottom_of_object = $(this).offset().top + $(this).outerHeight();
               if (bottom_of_window > bottom_of_object) {
                $(this).siblings().addClass('animate__fadeInLeft');
               }
           });
   });
   
      // $(window).scroll(function(){
      //   var bott
      // })
  $('.picboxa').mouseenter(function () {
      // over
      $(this).find('img').addClass('animate__fadeOutLeft');
      $(this).find('img').siblings().addClass('animate__fadeInRight pb');
      $(this).find('img').siblings().removeClass('animate__fadeOutRight');
    }
  );
  $('.picboxa').mouseleave(function(){
      // out
      $(this).find('img').removeClass('animate__fadeOutLeft');
      $(this).find('img').addClass('animate__fadeLeft');
      $(this).find('img').siblings().removeClass('animate__fadeInRight');
      $(this).find('img').siblings().addClass('animate__fadeOutRight');
    }
  )


});




lightbox.option({
    'resizeDuration': 400,
    'albumLabel':'%1 / %2'

  });

// 協力團隊

