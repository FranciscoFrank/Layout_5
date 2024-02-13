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

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
          breakpoint: 900,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
  ]});
});

document.addEventListener('DOMContentLoaded', function () {
  var submitButton = document.getElementById('button-sub-sub');
  var inputElements = document.querySelectorAll('.form-input');

  submitButton.addEventListener('click', function() {
      inputElements.forEach(function(inputElement) {
          inputElement.classList.add('failed');
      });
  });
});
