
jQuery(function() {


  //-------------グローバルナビを固定----------


  var _window = $(window),
       _nav = $('.gl-nav'),heroBottom;

  _window.on("scroll", function(){
    heroBottom = $(".hero").height();
    if(_window.scrollTop() > heroBottom) {
      _nav.addClass("transform")
    } else {
      _nav.removeClass("transform")
    }
  })


  
  // ------------トップへ戻るボタン------------
  var appear = false;
  var pagetop = $('#page_top');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '20px' //右から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-70px' //右から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 700); //0.5秒かけてトップへ戻る
    return false;
  });
  


  //------------FAQ アコーディオン-------------
  $('.faq__box-q').click(function(){

    $(this).next().slideToggle();
    $(this).toggleClass('active');

  });




});







