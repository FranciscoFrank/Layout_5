document.addEventListener('DOMContentLoaded', function() {

  var burgerButton = document.getElementById('burger-button');
  var overlay = document.getElementById('overlay');
  var burgerMenu = document.getElementById('burger-menu');
  var closeIcons = document.getElementById('close-icon');

  burgerButton.addEventListener('click', function(event) {
    overlay.style.display = 'block';
    overlay.style.position = 'fixed'; 
    burgerMenu.classList.add('active');
  });

  closeIcons.addEventListener('click', function(event) {
    overlay.style.display = 'none';
    overlay.style.position = 'absolute';
    burgerMenu.classList.remove('active');
  });

  document.addEventListener('click', function(event) {
    if (!burgerMenu.contains(event.target) && event.target !== burgerButton && !burgerButton.contains(event.target)) {
      overlay.style.display = 'none';
      overlay.style.position = 'absolute';
      burgerMenu.classList.remove('active');
    }
  });

});

document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function() {
    function calculateWidth() {
      var photoWidth = $('#s-photo').width();
      $('#s-details').css('width', 'calc(100% - ' + photoWidth + 'px)');
    }

    calculateWidth();

    $(window).resize(function() {
      calculateWidth();
    });
  });
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
          breakpoint: 850,
          settings: {
              slidesToShow: 1,
          },
      },
  ]});
});