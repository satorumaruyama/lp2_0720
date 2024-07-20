// カルーセル
$('.slick-container').slick({
  arrows: true,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  variableWidth: true,
  prevArrow: '<span class="slide-arrow prev-arrow"></span>',
  nextArrow: '<span class="slide-arrow next-arrow"></span>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});



// アコーディオン
$('.faq__answer').hide();
$('.faq__question').on('click', (e) => {
    if($(e.target).hasClass('active')) {
      $(e.target).removeClass('active');
      $(e.target).removeClass('after');
      $(e.target).next().hide();
    } else {
      $(e.target).addClass('active');
      $(e.target).next().show(); 
    }
    console.log("hello")
  });