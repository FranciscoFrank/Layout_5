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
  var element = document.getElementById('header-height');
  var header = document.getElementById('header');

  function updateHeight() {
      var elementHeight = header.offsetHeight;
      element.style.height = elementHeight + 'px';
  }

  window.onload = function() {
    updateHeight();
  }

  window.onresize = function() {
    updateHeight();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('black-header');
    } else {
        header.classList.remove('black-header');
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
  var form = document.getElementById('MyForm');
  var submitButton = document.getElementById('button-sub-sub');
  var inputElements = document.querySelectorAll('.form-input');
  var successMessage = document.getElementById('mess');

  submitButton.addEventListener('click', function(event) {
      event.preventDefault();

      var isValid = true;
      inputElements.forEach(function(inputElement) {
          if (inputElement.value === '') {
              isValid = false;
              inputElement.classList.add('failed');
          } else {
              inputElement.classList.remove('failed');
          }
      });

      if (isValid) {
        successMessage.style.display = 'block';
        setTimeout(function() {
          form.submit();
        }, 2000); // 2000 мілісекунд = 2 секунди
      }
  });
});


