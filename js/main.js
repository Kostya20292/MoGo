$(function() {

  var header = $("#header__inner");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {
    if(scrollOffset > introH) {
      header.addClass("header-fixed");
    } else {
      header.removeClass("header-fixed");
    }
  }

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this);
    var blockId = $this.data('scroll');
    var blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("nav__link-active");
    $this.addClass("nav__link-active");

    

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  });

  $("#nav-toggle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  })

  $("[data-collapse]").on("click", function(event){
    event.preventDefault();

    var $this = $(this);
    var blockId = $this.data('collapse');
    $(blockId).slideToggle();
    $this.toggleClass("active");
  });

  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

});